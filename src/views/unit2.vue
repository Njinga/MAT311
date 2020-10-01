<template>
    <div class="unit2">
        <section class="py-3 px-3 mx-4 grey-text" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 2. Number Representation</h3>
        </section>
        <!--Section 2.1 -->
        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4">
            <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                2.1 Decimal and Binary system
            </h4>
            <hr class="blue mb-4 mt-0 ">
            <div>
                The number system used on a daily basis is called a <strong>decimal system</strong>.
                In decimal representation of integers we identify an integer

                <!--Equation 2.1-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'d_nd_{n-1}\\cdots d_1d_0'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.1)'"></div>
                    </div>
                </div>
                <!--./Equation 2.1-->
                with

                <!--Equation 2.2-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'d_n10^n + d_{n-1}10^{n-1} + \\cdots + d_1 10^1 + d_0 10^0'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.2)'"></div>
                    </div>
                </div>
                <!--./Equation 2.2-->
                Similarly, an infinite decimal of the form

                <!--Equation 2.3-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'d_nd_{n-1}\\cdots d_1d_0.d_{-1}d_{-2}d_{-3}\\ldots'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.3)'"></div>
                    </div>
                </div>
                <!--./Equation 2.3-->
                can be represented as

                <!--Equation 2.4-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'d_n10^n + d_{n-1}10^{n-1} + \\cdots + d_1 10^1 + d_0 10^0 + d_{-1}10^{-1} + d_{-2}10^{-2} + \\ldots'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.4)'"></div>
                    </div>
                </div>

                <!--./Equation 2.4-->
                where <span v-katex="'d_k'"></span> is an integer from <span v-katex="'0'"></span> to <span v-katex="'9'"></span>, with <span v-katex="'d_n \\neq 0'"></span>. For example,

                <div style="background-color: #e2e3e5" class="mt-3 mb-4 p-3">
                    <deep>Example 2.1</deep>

                    <!--Equations 2.5 & 2.6-->


                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'\\begin{aligned}23456 \&= 2\\times 10^4 + 3\\times 10^3 + 4\\times 10^2 + 5\\times 10^1 + 6 \\times 10^0 ~~~~~~~~~~~\&(2.5)\\\\ 234.56 \&= 2\\times 10^2 + 3\\times 10^1 + 4\\times 10^0 + 5\\times 10^{-1} + 6 \\times 10^{-2}\&(2.6)\\end{aligned}'"></div>
                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 2.5 & 2.6-->
                </div>

                In general, an <span v-katex="'(n+1)'"></span> digit integer <span v-katex="'I'"></span> can be expressed in base <span v-katex="'b'"></span> as


                <!--Equation 2.7-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'I = (a_na_{n-1}a_{n-2}\\ldots\\ldots a_2a_1a_0)_b'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.7)'"></div>
                    </div>
                </div>
                <!--./Equation 2.7-->
                If <span v-katex="'b = 10'"></span> the digits <span v-katex="'a_j'"></span> can take values between <span v-katex="'0'"></span> and <span v-katex="'9 \\space (a_n \neq 0)'"></span>

                <ul style="list-style:none">
                    <li>
                        If <span v-katex="'b = 2'"></span> the digits <span v-katex="'a_j'"></span> can either be 0 or 1.
                    </li>
                    <li>
                        The decimal value of the number (with base <span v-katex="'b'"></span>) given in equation (2.7) is

                        <!--Equation 2.8-->
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'I = b^n\\times a_n + b^{n-1}\\times a_{n-1} + \\cdots + b^1 \\times a_1 + b^0 \\times a_0.'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(2.8)'"></div>
                            </div>
                        </div>
                        <!--./Equation 2.8-->
                    </li>
                </ul>

                Most computers represent numbers as sums of multiple powers of 2 (a <i>binary</i> system). In a binary system, the mathematical expression of an integer is

                <!--Equation 2.9-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'I = (a_na_{n-1}a_{n-2}\\ldots\\ldots a_2a_1a_0)_2'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.9)'"></div>
                    </div>
                </div>
                <!--./Equation 2.9-->
                where <span v-katex="'a_i'"></span> is a <i>binary bit</i>, that is 0 or 1. The decimal value of a binary number is
                <!--Equation 2.10-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="' I = 2^na_n + 2^{n-1}a_{n-1} + \\cdots + 2^1a_1 + 2^0a_0 = \\sum_{k=0}^{n} 2^ka_k .'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.10)'"></div>
                    </div>
                </div>
                <!--./Equation 2.10-->
                If the binary number contains a fractional part, i.e is of the form

                <!--Equation 2.11-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'I = (a_na_{n-1}a_{n-2}\\ldots\\ldots a_2a_1a_0.a_{-1}a_{-2}a_{-3}\\ldots)_2'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.11)'"></div>
                    </div>
                </div>
                <!--./Equation 2.11-->
                it can be represented as

                <!--Equation 2.12-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'I = 2^na_n + 2^{n-1}a_{n-1} + \\cdots + 2^1a_1 + 2^0a_0 + 2^{-1}a_{-1}+2^{-2}a_{-2} + 2^{-3}a_{-3} + \\ldots '"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.12)'"></div>
                    </div>
                </div>
                <!--./Equation 2.12-->
                <!--Exapmle 2.2-->
                <div style="background-color: #e2e3e5" class="mt-3 mb-4 p-3">
                    <deep>Example 2.2</deep>


                    <div v-katex:display="'\\begin{aligned}(11001)_2\&= 2^4\\cdot 1 + 2^3\\cdot 1 + 2^2\\cdot 0 + 2^1 \\cdot 0 + 2^0\\cdot 1 \\\\        \&= 16 +8 + 0 + 0 + 1 = (25)_{10}\\\\         \& \\\\ (0.0111)_2\&= 2^{-1}\\cdot 0 + 2^{-2}\\cdot 1 + 2^{-3}\\cdot 1 + 2^{-4}\\cdot 1 \\\\        \&= 0 + 0.25 + 0.125 + 0.0625 = (0.4375)_{10} \\end{aligned}'"></div>


                </div>
                <!--./Example 2.2-->
            </div>
            <div class="py-3">
                <h4 class="h4-responsive py-2 font-weight-bold">
                    2.1.1 Conversion from decimal number to binary number
                </h4>
                <h5 class="font-weight-bold py-2">Converting of the integer part</h5>
                A decimal number <span v-katex="'I_{10}'"></span>  can be represented in binary form as

                <!--Equation 2.13-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'I_{10} = (a_na_{n-1}\\ldots a_1a_0)_2 = 2^n a_n + 2^{n-1}a_{n-1}+\\ldots +2^1a_1 + 2^0a_0 = (a_na_{n-1}a_{n-2}\\ldots\\ldots a_2a_1a_0)_2.'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.13)'"></div>
                    </div>
                </div>
                <!--./Equation 2.12-->
                For example
                <div style="background-color: #e2e3e5" class="mt-3 mb-4 p-3">
                    <deep>Example 2.3</deep>

                    <!--Equation 2.14  & 2.15-->
                    <div class="row">

                        <div class="col">
                            <div v-katex:display="'\\begin{aligned}7 \&= 4 + 2 + 1 = 2^2 +2^1 + 2^0 = (111)_2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\&(2.14)\\\\ 25\&= 16 + 8 + 1 = 2^4 + 2^3 + 0\\cdot 2^2 + 0 \\cdot 2^1 + 2^0 = (11001)_2 \&(2.15)\\end{aligned}'"></div>
                        </div>
                    </div>
                    <!--Equation 2.14  & 2.15-->


                </div>
                The following procedure is a more general approach that can be
                used to convert decimal integers to binary form.<br>

                Given an integer <span v-katex="'I_{10}'"></span>, determine the quotients <span v-katex="'Q_i'"></span> and the remainders <span v-katex="'R_i'"></span> such that
                <div v-katex:display="'\\begin{aligned} I_{10}\&=\& 2Q_0 + R_0\\\\  Q_0 \&=\&2Q_1 + R_1 \\\\  Q_1 \&=\& 2Q_2 + R_2 \\\\ \\vdots\& \&\\vdots \\\\ Q_{n-1} \&=\& 2Q_n + R_n \\end{aligned}'"></div>


                The remainders are 0s and 1s and the binary form for the number <span v-katex="'I_{10}'"></span> is

                <!--Equation 2.16-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'R_nR_{n-1}R_{n-2}\\ldots R_1R_0'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.16)'"></div>
                    </div>
                </div>
                <!--./Equation 2.16-->
                It should be noted that

                <!--Equation 2.17-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'R_nR_{n-1}R_{n-2}\\ldots R_1R_0  = a_na_{n-1}a_{n-2}\\ldots a_1a_0'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.17)'"></div>
                    </div>
                </div>
                <!--./Equation 2.17-->
                <!--Example 2.4-->
                <div style="background-color: #e2e3e5" class="mt-3 mb-4 p-3">
                    <deep>Example 2.4</deep>
                    Convert the following decimal numbers into binary form
                    <ol style="list-style:lower-latin">
                        <li>
                            <div v-katex="'(53)_{10}'"></div>
                        </li>

                        <li>
                            <span v-katex="'(315)_{10}'"></span>
                        </li>

                    </ol>
                </div>
                <!--./Exapmle 2.4-->
                Answer:

                <ol style="list-style:lower-latin">
                    <li>
                        <span v-katex="'\\textbf{This requires special attention} \\textit{around line 400 in the tex file}'"></span>


                        <div v-katex:display="'\\begin{array}{c|rccc} \\multicolumn{2}{r}{\\rm Quotients}\& \& {\\rm Remainders} \\\\ 2\&53\& \\;\\;\\;\\;\\;\\;\\;\\;\&  \\\\ \\cline{2-2} 2\&26\& \\;\\;\\;\\;\\;\\;\\;\\;\& 1 = a_0 \\\\ \\cline{2-2} 2\&13\& \\;\\;\\;\\;\\;\\;\\;\\;\& 0 = a_1 \\\\ \\cline{2-2} 2\&6\& \\;\\;\\;\\;\\;\\;\\;\\;\&  1 = a_2 \\\\ \\cline{2-2} 2\&3\& \\;\\;\\;\\;\\;\\;\\;\\;\&  0 = a_3 \\\\ \\cline{2-2} 2\&1\& \\;\\;\;\\;\\;\\;\\;\\;\&  1 = a_4 \\\\ \\cline{2-2} 2\&0\& \\;\\;\\;\\;\\;\\;\\;\\;\&  1 = a_5 \\\\ \\cline{2-2} \\end{array}'"></div>

                        Thus <span v-katex="'(53)_{10}'"></span> = <span v-katex="'(110101)_{2}'"></span>
                    </li>

                    <li>
                        <span v-katex="'\\textbf{Hence I will give it that attention later}'"></span>

                        <div v-katex:display="'\\begin{array}{c|rccc}  \\multicolumn{2}{r}{\\rm Quotients}\& \& {\\rm Remainders} \\\\ 2\&315\& \\;\\;\\;\\;\\;\\;\\;\\;\&  \\\\ \\cline{2-2} 2\&157\& \\;\\;\\;\\;\\;\\;\\;\\;\& 1 = a_0 \\\\ \\cline{2-2} 2\&78\& \\;\\;\\;\\;\\;\\;\\;\\;\&  1 = a_1 \\\\ \\cline{2-2} 2\&39\& \\;\\;\\;\\;\\;\\;\\;\\;\&  0 = a_2 \\\\ \\cline{2-2} 2\&19\& \\;\\;\\;\\;\\;\\;\\;\\;\&  1 = a_3 \\\\ \\cline{2-2} 2\&9\& \\;\\;\\;\\;\\;\\;\\;\\;\&   1 = a_4 \\\\ \\cline{2-2} 2\&4\& \\;\\;\\;\\;\\;\\;\\;\\;\&   1 = a_5 \\\\ \\cline{2-2} 2\&2\& \\;\\;\\;\\;\\;\\;\\;\\;\&  0 = a_6 \\\\ \\cline{2-2} 2\&1\& \\;\\;\\;\\;\\;\\;\\;\\;\&   0 = a_7 \\\\ \\cline{2-2} 2\&0\& \\;\\;\\;\\;\\;\\;\\;\\;\&   1 = a_8 \\\\ \\cline{2-2} \\end{array}'"></div>

                        Thus <span v-katex="'(315)_{10}'"></span> = <span v-katex="'(100111011)_{2}'"></span>
                    </li>

                </ol>

                <h5 class="font-weight-bold py-2">Converting the fractional part (binary fraction)</h5>
                In the case of a decimal fraction <span v-katex="'I'"></span> such that <span v-katex="' 0 < I < 1'"></span>,
                we note that the binary form is

                <!--Equation 2.18-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'I = (0.d_1d_2d_3\\ldots d_{n-1}d_{n})_2 = \\frac{d_1}{2} + \\frac{d_2}{2^2} + \\frac{d_3}{2^3} + \\ldots + \\frac{d_n}{2^n}'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.18)'"></div>
                    </div>
                </div>
                <!--./Equation 2.18-->
                then

                <!--Equation 2.19-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'2I =  d_1 + \\left(\\frac{d_2}{2} + \\frac{d_3}{2^2} + \\ldots + \\frac{d_n}{2^{n-1}}\\right)'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.19)'"></div>
                    </div>
                </div>
                <!--./Equation 2.19-->
                The quantity in parenthesis on the right side of equation (2.19) is a positive number and is less than 1. Therefore <span v-katex="'d_1'"></span> is
                the integer part of <span v-katex="'2I'"></span>, denoted <span v-katex="'d_1=int(2I)'"></span>. To continue the process, take the fractions part of (2.19) and write


                <!--Equation 2.20-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'F_1 = frac(2I)  =  \\frac{d_2}{2} + \\frac{d_3}{2^2} + \\ldots + \\frac{d_n}{2^{n-1}}'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.20)'"></div>
                    </div>
                </div>
                <!--./Equation 2.20-->
                where <span v-katex="'frac(2I)'"></span> is the fractional part of the real
                number <span v-katex="'2I'"></span>. Multiplying both sides of equation (2.20) by 2 results in
                <!--Equation 2.21-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'2F_1 = d_2 + \\left(\\frac{d_3}{2} + \\ldots + \\frac{d_n}{2^{n-2}}\\right)'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.21)'"></div>
                    </div>
                </div>
                <!--./Equation 2.21-->
                Now, take the integer part of equation (2.21) and obtain <span v-katex="'d_2 = int(2F_1)'"></span>. This process is
                continued and two sequences <span v-katex="'\{d_k \}'"></span> and <span v-katex="'\{F_k \}'"></span> are recursively generated such that


                <!--Equation 2.22-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'d_k = int(2F_{k-1}),\\;\\;\\;\\;\\;F_k = frac(2F_{k-1})'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.22)'"></div>
                    </div>
                </div>
                <!--./Equation 2.22-->
                where <span v-katex="'d_1 = int(2I)'"></span> and <span v-katex="'F_1 = frac(2I)'"></span>.


                <!--Example 2.5-->
                <div style="background-color: #e2e3e5" class="mt-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 2.5</span>
                    Convert the following decimal numbers to binary numbers
                    <ol style="list-style:lower-latin">
                        <li>
                            <span v-katex="'(0.4375)_{10}'"></span>
                        </li>

                        <li>
                            <span v-katex="'(0.6)_{10}'"></span>
                        </li>

                    </ol>

                    Answer
                    <ol style="list-style:lower-latin">
                        <li>
                            Let <span v-katex="'I = 0.4375'"></span>, then
                            <div v-katex:display="'\\begin{array}{lllll} 2I = 0.875 \& \\;\\;\\;\\;\\;\\;\& d_1 = int(0.875) = 0 \&  \\;\\;\\;\\;\\;\\; \& F_1 = frac(0.875) = 0.875 \\\\ 2F_1 = 1.75 \& \\;\\;\\;\\;\\;\\;\& d_2 = int(1.75)  = 1\&  \\;\\;\\;\\;\\;\\; \& F_2 = frac(1.75) = 0.75 \\\\ 2F_2 = 1.5 \& \\;\\;\\;\\;\\;\\;\& d_3 = int(1.5)  = 1\&  \\;\\;\\;\\;\\;\\; \& F_3 = frac(1.5) = 0.5 \\\\ 2F_3 = 1.0 \& \\;\\;\\;\\;\\;\\;\& d_4 = int(1.0)  = 1\&  \\;\\;\\;\\;\\;\\; \& F_4 = frac(1.0) = 0 \\\\ \\end{array}'"></div>

                            Thus, <span v-katex="'(0.4375)_{10} = (0.0111)_2'"></span> <br><br>
                        </li>

                        <li>
                            Let <span v-katex="'I = 0.6'"></span>

                            <div v-katex:display="'\\begin{array}{lllll} 2I = 1.2   \&  \\;\\;\\;\\;\\;\\; \& d_1 = int(1.2)  = 1\&  \\;\\;\\;\\;\\;\\; \& F_1 = frac(1.2) = 0.2 \\\\ 2F_1 = 0.4 \&  \\;\\;\\;\\;\\;\\; \& d_2 = int(0.4)  = 0\&  \\;\\;\\;\\;\\;\\; \& F_2 = frac(0.4) = 0.4\\\\ 2F_2 = 0.8 \&  \\;\\;\\;\\;\\;\\; \& d_3 = int(0.8)  = 0\&  \\;\\;\\;\\;\\;\\; \& F_3 = frac(0.8) = 0.8 \\\\ 2F_3 = 1.6 \&  \\;\\;\\;\\;\\;\\; \& d_4 = int(1.6)  = 1\&  \\;\\;\\;\\;\\;\\; \& F_4 = frac(1.6) = 0.6 \\\\ 2F_4 = 1.2 \&  \\;\\;\\;\\;\\;\\; \& d_5 = int(1.2)  = 1\&  \\;\\;\\;\\;\\;\\; \& F_5 = frac(1.2) = 0.2 \\\\ 2F_5 = 0.4 \&  \\;\\;\\;\\;\\;\\; \& d_6 = int(0.4)  = 0\&  \\;\\;\\;\\;\\;\\; \& F_6 = frac(0.4) = 0.4\\\\ 2F_6 = 0.8 \&  \\;\\;\\;\\;\\;\\; \& d_7 = int(0.8)  = 0\&  \\;\\;\\;\\;\\;\\; \& F_7 = frac(0.8) = 0.8 \\\\ 2F_7 = 1.6 \&  \\;\\;\\;\\;\\;\\; \& d_8 = int(1.6)  = 1\&  \\;\\;\\;\\;\\;\\; \& F_8 = frac(1.6) = 0.6 \\\\ \\end{array}'"></div>


                            Thus, <span v-katex="'(0.6)_{10} = (0.10011001\\ldots)_2 = (0.\\overline{1001})_2'"></span>

                        </li>

                    </ol>
                </div>
                <!--./Exapmle 2.5-->
            </div>
            <!--./Section 2.1.1-->
            <!--Section 2.1.2-->
            <div class="py-3">
                <h4 class="h4-responsive py-2 font-weight-bold">
                    2.1.2 Binary shifting
                </h4>

                Consider the binary number

                <!--Equation 2.23-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'S = (0.00000\\overline{11000})_2'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.23)'"></div>
                    </div>
                </div>
                <!--./Equation 2.23-->
                Multiplying both sides of (2.23) by  <span v-katex="'2^5'"></span> shifts the binary point five places to the right to obtain

                <!--Equation 2.24-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'32S = (0.\\overline{11000})_2'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.24)'"></div>
                    </div>
                </div>
                <!--./Equation 2.24-->
                Multiplying equation (2.23) by <span v-katex="'2^{10}'"></span> shifts the binary point ten places to the right to give

                <!--Equation 2.25-->
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'1024S = (11000.\\overline{11000})_2'"></div>
                    </div>
                    <div class="col">
                        <div v-katex:display="'(2.25)'"></div>
                    </div>
                </div>
                <!--./Equation 2.25-->
                Subtracting equation (2.23) from (2.25) gives

                <div v-katex:display="'\\begin{aligned} 992S\&=(11000)_2 \\\\ 992S\&= 24 \\\\   S\&=\\frac{24}{992} = \\frac{3}{124} \\end{aligned}'"></div>


                Thus, <span v-katex="'\\ S = (0.00000\\overline{11000})_2  = \\displaystyle{\\frac{3}{124}}'"></span>
            </div>
            <!--./Section 2.1.2-->
        </section>
        <!--./Section 2.1 -->
        <!--Exercice 2.1-->
        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4" style="background-color:#fff3e0" id="ex-1">
            <h4 class="h4-responsive">Exercise 2.1  <strong>Decimal and Binary system</strong></h4>
            <ol>
                <li>
                    Convert the following binary numbers to their decimal equivalent
                    <ol style="list-style-type:lower-latin;">

                        <li>
                            <!--a-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'11001'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'25'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--b-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'1000.001'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'8.125'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--c-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'11011.01'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'27.25'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--d-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'10110.0101'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'22.3125'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--e-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'100010.011'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'34.4375'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--f-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (10101.101)_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'21.6250'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--g-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (.101010101\\ldots)_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \\frac{2}{3}'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--h-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (.00011001100110011\\ldots)_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \\frac{1}{10}'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--i-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (111111...1)_2, \\text{with parentheses enclosing } n \\text{1s}.'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle 2^n - 1'"></div>
                                    </div>

                                </div>
                            </div>
                            <br><br>
                        </li>
                    </ol>
                </li>
                <li>
                    Use binary shifting to convert the following binary numbers to their decimal equivalent
                    <ol style="list-style-type:lower-latin;">
                        <li>
                            <!--a-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (0.0\\overline{0011})_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \\frac{1}{10}'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--b-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (0.\\overline{10})_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \\frac{2}{3}'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--c-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (0.\\overline{1001})_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \\frac{3}{5}'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--d-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (0.00000\\overline{11000})_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \\frac{3}{124}'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--e-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (0.0\\overline{1})_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \frac{1}{3}'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--f-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle (0.0\\overline{1})_2'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle \\frac{1}{3}'"></div>
                                    </div>

                                </div>
                            </div>
                            <br><br>
                        </li>
                    </ol>
                </li>
                <li>
                    Convert the following decimal numbers to their binary equivalent
                    <ol style="list-style-type:lower-latin;">
                        <li>
                            <!--a-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="' 193'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'11000001)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--b-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="' 3781'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(111011000101)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--c-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'0.5'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.1)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--d-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'0.8125'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.1101)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--e-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'22.3125'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(10110.0101)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--f-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="' 0.640625'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.101001)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--g-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'0.33203125'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.01010101)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--h-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle{\\frac{3}{5}}'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.\\overline{1001})_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--j-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle{\\frac{7}{16}}'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.0111)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <!--k-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle{\\frac{5}{8}}'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.101)_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>



                        <li>
                            <!--k-->
                            <!--Container fluid-->
                            <div class="container-fluid">
                                <!--Row-->
                                <div class="row">
                                    <!--First row-->
                                    <div class="col">
                                        <div v-katex="'\\displaystyle{\\frac{7}{10}}'"></div>
                                    </div>
                                    <!--Second Row-->
                                    <div class="col">
                                        <div v-katex="'(0.1\\overline{0110})_2'"></div>
                                    </div>

                                </div>
                            </div>
                        </li>


                    </ol>
                </li>
            </ol>

        </section>

        <!--./Exercise 2.1-->
        <!--section 2.2-->
        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4">
            <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                2.2 Representing Numbers
            </h4>
            <hr class="blue mb-4 mt-0 ">
            In this chapter we explain the different ways in which numbers
            can be represented and how computers store numbers and we develop
            the basic ideas of roundoff errors.

            <!--Section 2.2.1-->
            <div class="py-3">
                <h4 class="h4-responsive py-2 font-weight-bold">
                    2.1.2 Floating-Point Representation and Errors
                </h4>

                The standard way of representing a positive real
                number in decimal form is with an integer part,
                a fractional part, and a decimal point between
                them e.g 12.484574, 0.0048585, 39470.982331.
                In <span class="font-weight-bold">Scientific notation</span>, numbers
                are represented in terms of a <i>sign</i>,
                an <i>exponent</i>, and a <i>mantissa</i>.
                For example, any nonzero decimal number <span v-katex="'x'"></span> can be written in a unique way as

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'x = \\sigma\\cdot\\bar{x} \\times 10^e,\\;\\;\\;\\;\\; 1 \\leq \\bar{x} < 10'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(2.26)'"></div>
                        </div>

                    </div>

                </div>



                where <span v-katex="'\\sigma'"></span> represents the
                sign (i.e +1 or -1), <span v-katex="'\\bar{x}'"></span> is the
                mantissa, and <span v-katex="'e'"></span> is the exponent.

                <!--Example 2.6-->
                <div style="background-color: #e2e3e5" class="mt-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 2.6</span>
                    Represent the following numbers 12.484574, 0.0048585, 39470.982331 in scientific notation

                    <br><br>

                    Answer: We shift the decimal point in such a way that the mantissa falls between 1 and 10.
                    <br><br>

                    <div v-katex="'\\begin{aligned} 12.484574 \&= +1.2484574 \\times 10^1,\\;\\;\\;(\\textrm{Shift decimal to the left once}) \\\\ 0.0048585 \&= +4.8585 \\times 10^{-3},\\;\\;\\;(\\textrm{Shift decimal to the right three times}) \\\\ 39470.982331\&=+3.9470982331 \\times 10^{4},\\;\\;\\;(\\textrm{Shift decimal to the left four times}) \\end{aligned}'"></div>


                    <br>

                </div>
                <!--./Example 2.6-->
                Another form, called the <span class="font-weight-bold">
                    normalized
                    scientific notation
                </span>, is obtained by shifting the decimal
                point and supplying the appropriate powers of 10. In this type
                of representation, the number is represented by a fraction
                multiplied by <span v-katex="'10^n'"></span>, and the leading
                digit in the fraction is not zero.

                For example, any nonzero decimal number <span v-katex="'x'"></span> can
                be written in a unique way as
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'x = \\sigma\\cdot\\bar{x} \\times 10^e,\\;\\;\\;\\;\\; \\frac{1}{10} \\leq \\bar{x} < 1'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(2.27)'"></div>
                        </div>

                    </div>

                </div>

                Thus, the numbers in example 2.6 have the following representations
                <br /> <br />
                <div v-katex="'\\begin{aligned} 12.484574 \&= 0.12484574 \\times 10^2,\\;\\;\\;(\\textrm{Shift decimal to the left two times}) \\\\ 0.0048585 \&= 0.48585 \\times 10^{-2},\\;\\;\\;(\\textrm{Shift decimal to the right two times}) \\\\ 39470.982331\&=0.39470982331 \\times 10^{5},\\;\\;\\;(\\textrm{Shift decimal to the left five times}) \\end{aligned}'"></div>

                <br /><br />
                In the context of computer science, normalized scientific
                notation is also called <span class="font-weight-bold"> normalized floating point-representation</span>.
                In a computer's internal representation, all nonzero floating-point number
                are normalised with bases of 2, i.e using the <i>binary system</i>.
                The floating point representation in the binary system is similar to
                that in the decimal system. If <span v-katex="'x'"></span> is a non-zero number,
                it can be written as

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'x = \\pm q \\times 2^m,\\;\\;\\;\\;\\;\\; \\left(\\frac{1}{2} \\leq q < 1 \\right)'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(2.28)'"></div>
                        </div>

                    </div>

                </div>

                The mantissa <span v-katex="'q'"></span> is expressed as a
                sequence of zeros or ones in the form
                <div v-katex:display="' q = 0.b_1b_2b_3'"></div>

                where <span v-katex="'b_1 \\neq 0'"></span>.

                <p>
                    To a computer, the ability to completely represent
                    a number's mantissa and exponent is limited.
                    As a result most real numbers cannot be represented
                    exactly in a computer. Furthermore, numbers may be
                    either too large or too small to be representable.
                    The real numbers that are representable in a computer
                    are called <deep>machine numbers</deep>. A computer will
                    designate a finite number of binary "bits" to
                    represent a number (i.e it uses a discrete set
                    of numbers not a continuum). To illustrate, let us
                    take an example, in which the floating-point numbers
                    must be of the form <span v-katex="'x = \\pm (0.b_1b_2) \\times 2^{\\pm m}'"></span>,
                    where <span v-katex="'b_1'"></span>, <span v-katex="'b_2'"></span> and <span v-katex="'m'"></span> are allowed to have only the value
                    0 or 1.
                </p>

                <!--Example 2.7-->
                <div style="background-color: #e2e3e5" class="mt-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 2.7</span>

                    List all the floating-point numbers that can be expressed in the form
                    <div v-katex:display="'x = \\pm (0.b_1b_2)_2 \\times 2^{\\pm k},\\;\\;\\;\\;\\;\\;(k,b_i \\in \\{ 0, 1\\})'"></div>



                    Answer: There are two choices for the <span v-katex="'\\pm'"></span>, two choices
                    for <span v-katex="'b_1'"></span>, two choices for <span v-katex="'b_2'"></span> and three choices for
                    the exponent. Thus, at first one would
                    expect <span v-katex="'2 \\times 2 \\times 2 \\times 3=24'"></span> different
                    numbers. However, there is some duplication. For
                    example, the positive numbers are as follows

                    <div v-katex:display="'\\begin{array}{ccccccccccccc} 0.00 \\times 2^0 \&=\&0 \&~~\&~~\&0.00 \\times 2^1 \& = \& 0 \&~~\&~~0.00 \\times 2^{-1} = 0 \\\\ \\\\ 0.01 \\times 2^0 \&=\&  \\displaystyle \\frac{1}{4} \&~~\&~~\&0.01 \\times 2^1 \& = \& \\displaystyle \\frac{1}{2} \&~~\&~~0.01 \\times 2^{-1} = \\displaystyle  \\frac{1}{8} \\\\ \\\\ 0.10 \\times 2^0 \&=\& \\displaystyle \\frac{1}{2} \&~~\&~~\&0.10 \\times 2^1 \& = \&1 \&~~\&~~0.10 \\times 2^{-1} = \\displaystyle \\frac{1}{4} \\\\ \\\\ 0.11 \\times 2^0 \&=\& \\displaystyle \\frac{3}{4} \&~~\&~~\&0.11 \\times 2^1 \& = \& \\displaystyle \\frac{3}{2} \&~~\&~~0.11 \\times 2^{-1}  = \\displaystyle \\frac{3}{8}\\\\ \\end{array}'"></div>
                    The positive numbers obtained are shown on the line below
                </div>

                <!--The SVG code for the line -->



                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="" height="" viewBox="0 0 1099.000000 110.000000"
                     preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,110.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M1989 1016 c-4 -4 -4 -27 -1 -52 3 -33 1 -49 -9 -55 -10 -6 -5 -9 16
-9 17 0 25 3 18 8 -6 4 -13 31 -15 61 -2 29 -6 50 -9 47z" />
                        <path d="M2853 1014 c20 -6 23 -34 5 -52 -9 -9 -9 -12 1 -12 9 0 12 -9 9 -24
-4 -17 -1 -23 9 -19 14 6 17 25 6 37 -5 4 -8 22 -8 39 0 24 -5 32 -20 34 -15
1 -16 1 -2 -3z" />
                        <path d="M3709 1016 c-4 -4 -4 -27 -1 -52 3 -33 1 -49 -9 -55 -10 -6 -5 -9 16
-9 17 0 25 3 18 8 -6 4 -13 31 -15 61 -2 29 -6 50 -9 47z" />
                        <path d="M10553 1005 c-3 -9 -3 -18 -1 -21 3 -3 8 4 11 16 6 23 -1 27 -10 5z" />
                        <path d="M10589 1006 c9 -10 10 -20 3 -32 -7 -12 -6 -24 2 -36 9 -15 8 -21 -4
-28 -8 -5 -10 -10 -4 -10 20 0 39 29 26 42 -6 6 -8 23 -5 38 3 20 0 29 -12 34
-15 5 -16 4 -6 -8z" />
                        <path d="M1132 963 c-1 -30 -7 -53 -14 -56 -7 -3 1 -6 17 -6 17 0 25 3 18 7
-6 4 -13 30 -16 57 l-3 50 -2 -52z" />
                        <path d="M2821 994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                        <path d="M234 904 c-9 -22 -12 -48 -8 -70 11 -58 21 -47 20 22 -1 47 3 67 14
74 11 7 11 10 2 10 -7 0 -20 -16 -28 -36z" />
                        <path d="M7125 929 c-17 -6 -17 -8 -2 -8 14 -1 17 -11 17 -65 0 -53 -3 -65
-17 -69 -10 -3 0 -5 22 -5 22 0 34 2 28 5 -9 3 -13 28 -13 73 0 38 -3 71 -7
73 -5 3 -17 1 -28 -4z" />
                        <path d="M304 859 c0 -45 3 -66 10 -59 12 12 12 90 0 112 -6 11 -9 -5 -10 -53z" />
                        <path d="M2820 921 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" />
                        <path d="M10540 919 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                        <path d="M1108 853 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z" />
                        <path d="M1968 853 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z" />
                        <path d="M2828 853 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z" />
                        <path d="M3688 853 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z" />
                        <path d="M10553 853 c15 -2 39 -2 55 0 15 2 2 4 -28 4 -30 0 -43 -2 -27 -4z" />
                        <path d="M2001 820 c-2 -8 -2 -27 -1 -42 1 -22 -3 -27 -27 -31 l-28 -4 28 -2
c28 -1 37 -15 15 -24 -7 -3 1 -6 17 -6 23 -1 27 2 15 9 -13 9 -13 11 0 20 9 6
10 10 3 10 -7 0 -14 19 -16 43 -2 23 -5 35 -6 27z" />
                        <path d="M2860 826 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z" />
                        <path d="M3686 822 c-3 -5 5 -8 17 -8 19 1 22 -4 20 -32 -1 -27 1 -31 13 -21
17 14 18 41 2 57 -14 14 -44 16 -52 4z" />
                        <path d="M10552 818 c-15 -15 -16 -38 -2 -38 6 0 10 8 8 18 -2 11 3 17 17 17
33 0 30 -34 -6 -71 l-33 -34 37 0 c20 0 37 4 37 9 0 5 -9 7 -20 4 -11 -3 -20
-1 -20 4 0 6 9 18 20 28 24 22 26 60 4 69 -22 8 -28 8 -42 -6z" />
                        <path d="M1161 808 c-1 -26 -20 -32 -42 -12 -20 18 -27 6 -8 -13 8 -8 8 -13 0
-17 -6 -4 -11 -17 -10 -29 1 -20 2 -20 8 3 4 14 13 25 21 25 8 0 20 -11 27
-25 12 -24 13 -24 13 -3 0 12 -5 25 -10 28 -8 5 -7 11 0 21 7 7 10 19 7 26 -4
8 -6 7 -6 -4z" />
                        <path d="M2820 808 c0 -9 5 -20 10 -23 8 -5 7 -12 -2 -23 -12 -15 -11 -15 4
-4 14 11 20 10 37 -7 15 -15 21 -17 21 -7 0 8 -5 18 -10 21 -6 4 -8 11 -5 16
3 5 0 6 -8 3 -9 -3 -22 4 -31 18 -12 17 -16 19 -16 6z" />
                        <path d="M3675 790 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
-4 -4 -10z" />
                        <path d="M2822 724 c10 -10 20 -16 22 -13 3 3 -5 11 -17 18 -21 13 -21 12 -5
-5z" />
                        <path d="M3740 731 c0 -9 -9 -12 -25 -9 -14 3 -28 1 -31 -3 -3 -5 8 -9 25 -9
29 0 49 15 37 27 -3 4 -6 1 -6 -6z" />
                        <path d="M229 595 c-14 -8 -32 -28 -39 -45 -17 -42 5 -91 50 -110 27 -11 36
-11 65 3 18 9 36 25 40 36 6 21 12 21 355 21 343 0 349 0 355 -21 4 -11 22
-27 41 -36 31 -15 37 -15 68 0 19 9 37 25 41 36 6 21 12 21 355 21 343 0 349
0 355 -21 4 -11 22 -27 41 -36 31 -15 37 -15 68 0 19 9 37 25 41 36 6 21 12
21 355 21 343 0 349 0 355 -21 4 -11 22 -27 41 -36 31 -15 37 -15 68 0 19 9
37 25 41 36 6 21 12 21 355 21 343 0 349 0 355 -21 4 -11 22 -27 41 -36 31
-15 37 -15 68 0 19 9 37 25 41 36 l6 21 1634 0 1634 0 6 -21 c4 -11 22 -27 41
-36 31 -15 37 -15 68 0 19 9 37 25 41 36 l6 21 1634 0 1634 0 6 -21 c4 -11 22
-27 41 -36 31 -15 37 -15 67 -1 70 34 70 122 0 156 -30 14 -36 14 -67 -1 -19
-9 -37 -25 -41 -36 l-6 -21 -1634 0 -1634 0 -6 21 c-4 11 -22 27 -41 36 -31
15 -37 15 -68 0 -19 -9 -37 -25 -41 -36 l-6 -21 -1634 0 -1634 0 -6 21 c-4 11
-22 27 -41 36 -31 15 -37 15 -68 0 -19 -9 -37 -25 -41 -36 -6 -21 -12 -21
-355 -21 -343 0 -349 0 -355 21 -4 11 -22 27 -41 36 -31 15 -37 15 -68 0 -19
-9 -37 -25 -41 -36 -6 -21 -12 -21 -355 -21 -343 0 -349 0 -355 21 -4 11 -22
27 -41 36 -31 15 -37 15 -68 0 -19 -9 -37 -25 -41 -36 -6 -21 -12 -21 -355
-21 -343 0 -349 0 -355 21 -4 11 -22 27 -41 36 -31 15 -37 15 -68 0 -19 -9
-37 -25 -41 -36 -6 -21 -12 -21 -355 -21 -341 0 -349 0 -355 20 -6 20 -53 50
-77 50 -7 -1 -25 -7 -39 -15z" />
                    </g>
                </svg>

                <!--./The SVG code for the line -->


                <p>
                    Altogether there are thirteen distinct numbers
                    in the system. One drawback associated with the
                    representable numbers being a finite set is that
                    it is also <i>bounded</i>. If in the course of
                    a computation, a number <span v-katex="'x'"></span> is produced in the
                    form <span v-katex="'x\\pm q \\times 2^m'"></span>, then we have <deep>overflow</deep>
                    when <span v-katex="'m'"></span> is outside the positive end of the computer's
                    permissible range and an <deep>underflow</deep> when <span v-katex="'m'"></span> is
                    beyond the negative end of the exponential range.
                    Generally an <i>overflow</i> results in
                    a <i>fatal error</i> (or <i> exception</i>) and
                    normal execution of the program stops. An underflow,
                    however, is treated automatically by setting <span v-katex="'x'"></span> to
                    zero without any interruption of the program.
                </p>
                In a computer whose floating point numbers
                are restricted to the form in example 2.7, any
                number closer to zero than  <span v-katex="'\\frac{1}{8}'"></span> would underflow
                to zero, and any number outside the range -1.5 to 1.5 would
                overflow to machine infinity.
            </div>
            <!--./Section 2.2.1-->
            <!--Section 2.2.2-->
            <div class="py-3">
                <h4 class="h4-responsive font-weight-bold">
                    2.2.2 Single-Precision floating point form
                </h4>
                <p>
                    The IEEE (Institute of Electrical and Electronics Engineers)
                    has produced a standard for floating point arithmetic.
                    This standard specifies how single precision (32 bit)
                    and double precision (64 bit) floating point numbers
                    are to be represented, as well as how arithmetic
                    should be carried out on them.

                </p>

                The IEEE single precision floating point
                standard representation requires a 32 bit word,
                which may be represented as numbered from 0 to 31,
                left to right. The first bit is the <i>sign bit</i>,
                <span v-katex="'s'"></span>, the next eight bits are the <i>exponent bits</i>,
                <i>e</i>, and the final 23 bits are the fraction <i>f</i>.
                In single-precision floating point a  machine number can
                be represented as

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'(-1)^s \\times 2^{e-127}\\times (1.f)_2'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(2.29)'"></div>
                        </div>

                    </div>

                </div>

                Note that <span v-katex="'s = 0'"></span> corresponds to a positive mantissa
                and <span v-katex="'s=1'"></span> corresponds to a negative mantissa. Each
                floating point single precision word is partitioned
                as in the diagram below:

                <!--Code the SVG -->
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="" height="" viewBox="0 0 1062.000000 201.000000"
                     preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,201.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M110 1260 l0 -510 5150 0 5150 0 0 510 0 510 -5150 0 -5150 0 0 -510z
m330 0 l0 -490 -155 0 -155 0 0 490 0 490 155 0 155 0 0 -490z m2610 0 l0
-490 -1295 0 -1295 0 0 490 0 490 1295 0 1295 0 0 -490z m7340 0 l0 -490
-3660 0 -3660 0 0 490 0 490 3660 0 3660 0 0 -490z" />
                        <path d="M270 1290 c-12 -23 -6 -40 15 -40 8 0 19 -8 24 -17 9 -16 10 -16 11
5 0 13 -6 22 -15 22 -21 0 -31 30 -14 41 9 6 10 9 2 9 -7 0 -17 -9 -23 -20z" />
                        <path d="M317 1289 c4 -13 8 -18 11 -10 2 7 -1 18 -6 23 -8 8 -9 4 -5 -13z" />
                        <path d="M245 1230 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                        <path d="M908 1353 c17 -7 17 -149 0 -156 -7 -3 20 -6 60 -6 68 -1 72 0 72 22
-1 20 -2 20 -11 5 -7 -12 -22 -18 -49 -18 -39 0 -40 1 -40 35 0 30 3 35 24 35
13 0 27 -6 29 -12 3 -7 6 3 6 22 0 28 -2 32 -10 18 -5 -10 -19 -18 -29 -18
-16 0 -20 7 -20 36 l0 36 45 -4 c25 -2 45 0 45 4 0 5 -30 8 -67 7 -38 0 -62
-3 -55 -6z" />
                        <path d="M1031 1314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                        <path d="M1830 1305 c-8 -9 -8 -15 -2 -15 6 0 12 -21 14 -47 2 -40 6 -48 23
-48 12 0 20 7 21 18 1 12 1 13 -3 2 -2 -8 -11 -15 -19 -15 -10 0 -14 13 -14
45 0 36 4 45 18 46 13 0 14 2 2 6 -8 3 -18 10 -21 15 -3 5 -12 2 -19 -7z" />
                        <path d="M1085 1274 c20 -21 22 -30 14 -41 -10 -11 -8 -12 5 -7 12 5 19 0 23
-15 3 -12 13 -21 25 -21 17 0 16 2 -7 27 -31 34 -31 37 1 62 26 20 26 21 5 21
-12 0 -20 -4 -17 -9 3 -5 -1 -14 -10 -22 -13 -10 -16 -9 -21 9 -3 13 -13 22
-24 22 -16 0 -15 -3 6 -26z" />
                        <path d="M1198 1289 c7 -8 12 -39 12 -75 0 -41 -4 -64 -12 -67 -7 -3 1 -6 17
-6 18 0 25 2 18 7 -8 5 -12 32 -11 77 1 62 -1 70 -18 73 -15 3 -17 1 -6 -9z" />
                        <path d="M1257 1290 c40 -16 40 -74 -1 -90 -14 -6 -16 -9 -5 -9 27 -1 52 24
52 54 0 30 -25 55 -52 54 -11 0 -8 -3 6 -9z" />
                        <path d="M1347 1282 c-22 -24 -21 -55 1 -75 35 -32 82 -10 82 38 0 49 -52 71
-83 37z m58 -37 c0 -36 -2 -40 -25 -40 -20 0 -26 6 -28 28 -5 42 5 59 30 55
20 -3 23 -9 23 -43z" />
                        <path d="M1458 1294 c7 -3 12 -24 12 -49 0 -25 -5 -45 -12 -48 -7 -3 1 -6 17
-6 20 0 26 2 17 8 -9 6 -13 23 -10 52 3 37 0 44 -17 46 -11 2 -14 0 -7 -3z" />
                        <path d="M1525 1245 c0 -52 1 -55 25 -55 15 0 20 3 13 8 -6 4 -13 27 -15 51
-4 65 -23 61 -23 -4z" />
                        <path d="M1596 1278 c-9 -12 -16 -30 -16 -39 0 -23 35 -52 57 -46 15 4 15 5
-3 6 -29 1 -36 23 -25 84 3 16 39 5 49 -15 7 -15 11 -18 11 -7 2 40 -49 52
-73 17z" />
                        <path d="M1698 1294 c7 -3 12 -24 12 -49 0 -25 -5 -45 -12 -48 -7 -3 -2 -6 12
-6 24 -1 25 2 24 51 -1 48 -4 53 -25 55 -13 1 -18 0 -11 -3z" />
                        <path d="M1763 1294 c13 -4 17 -16 17 -49 0 -25 -5 -45 -12 -48 -7 -3 1 -6 17
-6 17 0 25 3 18 7 -6 4 -13 27 -15 52 -2 36 -7 45 -23 47 -16 1 -16 1 -2 -3z" />
                        <path d="M2065 1275 c0 -13 3 -21 8 -18 4 2 7 10 7 18 0 8 -3 16 -7 18 -5 3
-8 -5 -8 -18z" />
                        <path d="M2004 1265 c-14 -21 -15 -31 -6 -50 7 -14 17 -25 24 -25 10 0 9 3 -1
9 -11 7 -12 17 -4 50 13 48 10 51 -13 16z" />
                        <path d="M1070 1200 c-12 -8 -10 -10 8 -10 13 0 20 4 17 10 -7 12 -6 12 -25 0z" />
                        <path d="M4702 1348 c-7 -7 -12 -18 -12 -25 0 -8 -7 -16 -16 -20 -10 -4 -12
-8 -5 -13 9 -5 9 -21 1 -61 -17 -81 -19 -86 -30 -69 -5 8 -12 11 -16 7 -4 -4
-2 -13 5 -20 20 -19 49 25 56 88 6 41 11 55 24 55 13 0 13 2 2 9 -8 6 -11 16
-6 31 5 17 9 19 16 9 4 -7 11 -10 14 -7 8 8 -2 28 -14 28 -4 0 -12 -5 -19 -12z" />
                        <path d="M4872 1348 c-7 -7 -12 -20 -12 -29 0 -10 -6 -20 -12 -22 -10 -4 -10
-6 0 -6 7 -1 12 -17 12 -45 0 -26 -5 -46 -12 -49 -7 -3 1 -5 17 -5 17 0 24 2
18 5 -8 3 -13 23 -13 48 0 33 4 45 18 48 16 4 16 5 0 6 -21 1 -24 31 -6 49 7
7 10 12 7 12 -3 0 -10 -5 -17 -12z" />
                        <path d="M4900 1344 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z" />
                        <path d="M5988 1353 c8 -3 12 -29 12 -78 0 -49 -4 -75 -12 -78 -7 -3 1 -5 17
-5 17 0 24 2 18 5 -9 3 -13 30 -13 84 0 69 -2 79 -17 78 -11 0 -13 -3 -5 -6z" />
                        <path d="M7396 1338 c-34 -53 -27 -158 11 -189 16 -13 16 -12 0 11 -23 33 -24
146 -1 178 8 12 13 22 10 22 -3 0 -12 -10 -20 -22z" />
                        <path d="M7722 1348 c-7 -7 -12 -20 -12 -30 0 -10 -7 -18 -17 -18 -14 0 -15
-2 -4 -9 11 -7 11 -20 -1 -81 -12 -59 -12 -70 -2 -55 8 10 17 41 20 67 4 27
13 55 20 63 9 8 10 15 3 17 -7 2 -7 12 0 31 12 30 11 33 -7 15z" />
                        <path d="M7746 1345 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0
-6 -7 -10 -15z" />
                        <path d="M7816 1332 c22 -46 16 -152 -11 -184 l-20 -23 23 19 c46 39 52 150
11 198 -19 23 -19 23 -3 -10z" />
                        <path d="M6910 1340 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                        <path d="M7480 1339 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -65 0 -42 -4 -66
-12 -69 -7 -3 5 -5 27 -5 22 0 32 2 23 5 -14 3 -18 18 -20 77 -3 71 -3 72 -28
65z" />
                        <path d="M6826 1320 c-10 -33 -7 -102 6 -117 6 -7 18 -12 27 -12 13 1 13 2 -1
6 -14 3 -18 15 -18 48 0 33 4 45 18 48 15 4 15 5 0 6 -9 0 -18 11 -20 24 -3
22 -4 22 -12 -3z" />
                        <path d="M4918 1294 c7 -3 12 -24 12 -49 0 -25 -5 -45 -12 -48 -7 -3 3 -6 22
-6 19 0 30 3 23 7 -6 4 -13 27 -15 52 -2 36 -7 45 -23 47 -11 2 -14 0 -7 -3z" />
                        <path d="M4965 1290 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z" />
                        <path d="M5027 1282 c-22 -24 -21 -55 1 -75 35 -32 82 -10 82 38 0 49 -52 71
-83 37z m58 -37 c0 -36 -2 -40 -25 -40 -20 0 -26 6 -28 28 -5 42 5 59 30 55
20 -3 23 -9 23 -43z" />
                        <path d="M5138 1294 c7 -3 12 -24 12 -49 0 -25 -5 -45 -12 -48 -7 -3 -2 -6 12
-6 24 -1 25 2 24 51 -1 48 -4 53 -25 55 -13 1 -18 0 -11 -3z" />
                        <path d="M5203 1293 c13 -3 17 -15 17 -48 0 -25 -5 -45 -12 -48 -7 -3 1 -6 17
-6 20 0 26 2 17 8 -8 5 -13 22 -11 42 4 41 -6 59 -29 58 -15 -1 -15 -2 1 -6z" />
                        <path d="M5275 1245 c0 -52 1 -55 25 -55 15 0 20 3 13 8 -6 4 -13 27 -15 51
-4 65 -23 61 -23 -4z" />
                        <path d="M5416 1278 c-9 -12 -16 -30 -16 -39 0 -21 32 -49 56 -48 14 1 13 3
-6 8 -32 9 -42 68 -14 88 10 7 13 13 6 13 -6 0 -18 -10 -26 -22z" />
                        <path d="M5535 1245 c0 -52 1 -55 25 -54 14 0 19 3 13 6 -8 3 -13 24 -13 54 0
33 -4 49 -12 49 -9 0 -13 -18 -13 -55z" />
                        <path d="M5605 1244 c0 -41 3 -54 15 -54 12 0 14 10 12 45 -6 68 -27 76 -27 9z" />
                        <path d="M5677 1282 c-33 -37 -10 -93 36 -91 20 1 20 2 -3 8 -21 6 -25 13 -25
46 0 34 3 40 23 43 17 3 22 -2 22 -17 0 -12 5 -21 10 -21 13 0 13 6 0 31 -13
24 -42 25 -63 1z" />
                        <path d="M5855 1219 c0 -65 3 -79 16 -79 12 0 14 7 11 29 -4 26 -2 29 17 24
27 -7 61 22 61 53 0 33 -25 53 -68 52 l-37 0 0 -79z m80 26 c0 -36 -2 -40 -25
-40 -20 0 -26 6 -28 28 -5 42 5 59 30 55 20 -3 23 -9 23 -43z" />
                        <path d="M6060 1257 c9 -59 15 -66 58 -65 l37 0 -3 54 c-3 48 -6 54 -25 54
-16 0 -18 -3 -9 -9 8 -5 12 -23 10 -47 -2 -32 -7 -40 -25 -42 -21 -3 -23 0
-23 47 0 36 -4 51 -13 51 -11 0 -12 -10 -7 -43z" />
                        <path d="M6235 1290 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z" />
                        <path d="M6365 1245 c0 -52 1 -55 25 -54 14 0 19 3 13 6 -8 3 -13 24 -13 54 0
33 -4 49 -12 49 -9 0 -13 -18 -13 -55z" />
                        <path d="M6423 1293 c13 -3 17 -15 17 -48 0 -25 -5 -45 -12 -48 -7 -3 -2 -6
12 -6 23 -1 25 2 25 48 0 27 -3 47 -7 45 -4 -2 -9 0 -13 6 -3 5 -14 9 -23 9
-15 -1 -15 -2 1 -6z" />
                        <path d="M6493 1290 c20 -13 24 -85 5 -93 -7 -3 1 -6 17 -6 17 0 25 3 18 7 -6
4 -13 27 -15 52 -2 36 -7 45 -23 48 -18 2 -18 2 -2 -8z" />
                        <path d="M6571 1286 c-7 -8 -8 -17 -3 -20 6 -3 12 3 15 14 6 24 4 25 -12 6z" />
                        <path d="M6614 1285 c9 -9 13 -28 11 -49 -2 -24 2 -36 12 -41 9 -3 18 -3 21 0
3 3 0 5 -6 5 -7 0 -12 16 -12 38 0 36 -14 62 -33 62 -5 0 -2 -7 7 -15z" />
                        <path d="M6685 1245 c0 -52 1 -55 25 -54 14 0 19 3 13 6 -8 3 -13 24 -13 54 0
33 -4 49 -12 49 -9 0 -13 -18 -13 -55z" />
                        <path d="M6759 1253 c2 -31 -1 -48 -10 -54 -10 -6 -7 -9 11 -9 24 0 25 3 22
45 -2 24 -9 48 -15 54 -9 7 -11 -3 -8 -36z" />
                        <path d="M6908 1293 c7 -3 12 -23 12 -48 0 -25 -5 -45 -12 -48 -7 -3 1 -5 17
-5 17 0 24 2 18 5 -8 3 -13 24 -13 54 0 40 -3 49 -17 48 -11 0 -13 -3 -5 -6z" />
                        <path d="M6977 1293 c-17 -16 -5 -42 23 -52 29 -10 40 -34 20 -44 -6 -3 -5 -4
2 -3 34 7 13 66 -23 66 -21 0 -26 26 -6 33 6 3 7 6 1 6 -6 1 -14 -2 -17 -6z" />
                        <path d="M7031 1284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                        <path d="M7070 1285 c-15 -19 3 -45 31 -45 10 0 23 -8 28 -17 10 -17 10 -17
11 0 0 11 -13 24 -36 33 -29 12 -34 17 -24 29 7 8 10 15 7 15 -2 0 -10 -7 -17
-15z" />
                        <path d="M7110 1296 c0 -2 7 -9 15 -16 9 -7 15 -8 15 -2 0 5 -7 12 -15 16 -8
3 -15 4 -15 2z" />
                        <path d="M7171 1286 c-7 -8 -8 -17 -3 -20 6 -3 12 3 15 14 6 24 4 25 -12 6z" />
                        <path d="M7214 1285 c9 -9 13 -28 11 -49 -2 -24 2 -36 12 -41 9 -3 18 -3 21 0
3 3 0 5 -6 5 -7 0 -12 16 -12 38 0 36 -14 62 -33 62 -5 0 -2 -7 7 -15z" />
                        <path d="M5485 1245 c0 -39 2 -43 13 -28 6 9 12 22 12 28 0 6 -6 19 -12 28
-11 15 -13 11 -13 -28z" />
                        <path d="M6182 1275 c2 -11 12 -24 23 -30 47 -24 49 -27 30 -42 -11 -7 -14
-13 -8 -13 17 0 34 26 27 44 -3 9 -17 19 -30 22 -13 4 -29 14 -34 23 -9 14
-10 13 -8 -4z" />
                        <path d="M7892 1268 c-7 -7 -12 -19 -12 -27 0 -8 3 -11 8 -7 4 4 7 13 7 19 0
7 9 12 20 12 33 0 30 -34 -6 -71 l-33 -34 37 0 c20 0 37 4 37 9 0 5 -9 7 -20
4 -27 -7 -25 9 5 37 29 28 30 33 9 54 -19 19 -36 20 -52 4z" />
                        <path d="M6570 1235 c-13 -16 -7 -45 9 -45 5 0 7 9 4 21 -4 12 0 25 8 30 8 5
9 9 3 9 -6 0 -17 -7 -24 -15z" />
                        <path d="M7170 1235 c-13 -16 -7 -45 9 -45 5 0 7 9 4 21 -4 12 0 25 8 30 8 5
9 9 3 9 -6 0 -17 -7 -24 -15z" />
                        <path d="M6180 1213 c0 -11 7 -20 15 -20 12 0 12 3 3 16 -7 9 -14 18 -15 20
-2 2 -3 -5 -3 -16z" />
                        <path d="M7060 1209 c0 -11 4 -18 10 -14 5 3 7 12 3 20 -7 21 -13 19 -13 -6z" />
                        <path d="M7590 1200 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                        <path d="M7645 1161 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z" />
                        <path d="M2911 494 c10 -12 -166 -14 -1180 -14 -792 0 -1190 3 -1186 10 9 14
-7 12 -46 -4 l-34 -14 30 -12 c17 -6 36 -13 43 -15 7 -3 10 0 7 5 -4 7 403 10
1185 10 758 0 1189 -3 1185 -10 -6 -9 54 7 67 19 4 4 -13 14 -38 23 -35 12
-42 13 -33 2z" />
                        <path d="M3122 493 c-24 -8 -40 -19 -35 -23 14 -12 74 -30 68 -20 -4 7 1294
10 3587 10 2513 0 3588 -3 3578 -11 -11 -8 -9 -9 10 -3 54 15 76 26 60 31 -8
3 -30 12 -49 19 -30 12 -32 12 -21 -1 11 -13 -388 -15 -3580 -15 -3192 0
-3591 2 -3580 15 7 8 11 15 9 14 -2 0 -24 -7 -47 -16z" />
                        <path d="M150 486 l-34 -13 29 -10 c17 -6 39 -14 49 -19 14 -5 17 -4 12 4 -5
9 12 12 64 12 45 0 69 -4 65 -10 -4 -6 4 -6 22 0 15 6 35 13 43 16 13 5 13 6
0 13 -30 17 -63 24 -56 12 5 -8 -17 -11 -74 -11 -52 0 -79 4 -75 10 8 13 -1
12 -45 -4z" />
                        <path d="M1408 383 c8 -3 12 -30 12 -84 0 -51 4 -78 10 -74 6 3 10 42 10 86 0
76 -1 79 -22 78 -13 0 -17 -3 -10 -6z" />
                        <path d="M6268 383 c8 -3 12 -30 12 -84 0 -51 4 -78 10 -74 6 3 10 42 10 86 0
76 -1 79 -22 78 -13 0 -17 -3 -10 -6z" />
                        <path d="M270 369 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -65 0 -53 -3 -65 -17
-69 -10 -3 2 -5 27 -5 25 0 37 2 28 5 -14 3 -18 18 -20 77 -3 71 -3 72 -28 65z" />
                        <path d="M1222 368 c-15 -15 -15 -41 -1 -55 8 -8 7 -17 -5 -34 -14 -21 -14
-24 1 -41 18 -21 53 -24 71 -6 17 17 15 55 -4 66 -14 8 -14 10 0 21 9 8 16 18
16 23 0 6 -9 0 -19 -13 -19 -24 -19 -24 -40 -5 -26 24 -23 38 10 47 21 6 21 7
4 8 -12 1 -26 -4 -33 -11z m66 -117 c-5 -23 -62 -22 -66 2 -2 10 2 24 8 32 10
12 15 12 36 -2 14 -9 24 -23 22 -32z" />
                        <path d="M1550 370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                        <path d="M5990 371 c40 -11 38 -52 -4 -99 -20 -22 -36 -42 -36 -46 0 -3 20 -6
45 -6 30 0 45 4 45 13 0 9 -11 12 -37 9 l-38 -4 38 39 c20 21 37 49 37 61 0
23 -27 43 -57 41 -12 -1 -10 -3 7 -8z" />
                        <path d="M6110 371 c19 -6 24 -13 22 -31 -1 -13 -7 -27 -13 -31 -7 -4 -4 -9 6
-13 26 -10 16 -59 -15 -67 l-25 -7 26 -1 c14 -1 30 4 37 11 17 17 15 55 -3 62
-14 5 -14 8 1 31 20 31 5 56 -35 54 l-26 -1 25 -7z" />
                        <path d="M6410 370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                        <path d="M1631 363 c0 -6 -8 -19 -17 -27 -8 -9 -11 -16 -5 -16 6 0 11 -20 11
-45 0 -48 20 -69 43 -46 9 9 8 11 -5 6 -16 -6 -18 -1 -18 38 0 35 4 47 18 50
15 4 15 5 0 6 -9 0 -19 11 -21 24 -2 12 -5 17 -6 10z" />
                        <path d="M6491 363 c0 -6 -8 -19 -17 -27 -8 -9 -11 -16 -5 -16 6 0 11 -20 11
-45 0 -48 20 -69 43 -46 9 9 8 11 -5 6 -16 -6 -18 -1 -18 38 0 35 4 47 18 50
15 4 15 5 0 6 -9 0 -19 11 -21 24 -2 12 -5 17 -6 10z" />
                        <path d="M5950 346 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z" />
                        <path d="M6070 350 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                        <path d="M1484 314 c19 -18 20 -47 5 -77 -12 -22 -12 -22 10 -3 26 23 27 57 3
79 -24 22 -39 22 -18 1z" />
                        <path d="M1545 275 c0 -42 3 -55 15 -55 12 0 14 11 12 55 -5 74 -27 74 -27 0z" />
                        <path d="M1707 323 c-17 -16 -5 -42 23 -52 29 -10 40 -34 20 -44 -6 -3 -5 -4
2 -3 34 7 13 66 -23 66 -21 0 -26 26 -6 33 6 3 7 6 1 6 -6 1 -14 -2 -17 -6z" />
                        <path d="M1761 314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                        <path d="M6344 314 c17 -16 21 -63 9 -80 -5 -5 0 -1 10 9 22 25 22 50 -1 70
-24 22 -39 22 -18 1z" />
                        <path d="M6405 275 c0 -42 3 -55 15 -55 12 0 14 11 12 55 -5 74 -27 74 -27 0z" />
                        <path d="M6567 323 c-17 -16 -5 -42 23 -52 29 -10 40 -34 20 -44 -6 -3 -5 -4
2 -3 34 7 13 66 -23 66 -21 0 -26 26 -6 33 6 3 7 6 1 6 -6 1 -14 -2 -17 -6z" />
                        <path d="M6621 314 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                        <path d="M6067 263 c-3 -5 -2 -15 2 -22 7 -10 10 -10 16 -1 4 6 3 16 -3 22 -5
5 -12 6 -15 1z" />
                    </g>
                </svg>
                <!--./Code the SVG -->
             




                The largest value of the exponent <span v-katex="'e'"></span>  in the single precision representation is
                <div v-katex:display="'(11~111~111)_2 = 2^7 + 2^6 + 2^5 + 2^4  + 2^3 + 2^2 + 2^1 + 2^0 = 255'"></div>

                Thus value of the exponent  <span v-katex="'e'"></span>  is restricted by the inequality
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'0 < e < (11~111~111)_2 =  255'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(2.30)'"></div>
                        </div>

                    </div>

                </div>

                The values 0 and 255 are reserved for special cases, including  <span v-katex="'\\pm 0'"></span> and <span v-katex="'\\pm \\infty'"></span>, respectively.
                Hence, the actual exponent of the number is restricted by the inequality

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'-126 \\leq e - 127  \\leq 127.'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(2.31)'"></div>
                        </div>

                    </div>

                </div>

                Similarly, it can be shown that the mantissa of each nonzero number is restricted by the inequality

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'1 \\leq (1.f)_2 \\leq (1.111~111~111~111~111~111~111~11)_2 = 2 - 2^{-23}'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(2.32)'"></div>
                        </div>

                    </div>

                </div>

                Note that
                <div v-katex:display="'\\begin{aligned} 1.111~111~111~111~111~111~111~11 \&= 2^0 + \\overbrace{2^{-1} + 2^{-2} + \\cdots + 2^{-23}}^{\\rm 23~ terms}\\\\ \&= \\displaystyle 1 + 2^{-1}\\frac{[1 - (2^{-1})^{23}]}{(1-2^{-1})}\\\\ \&= 2 - 2^{-23} \\end{aligned}'"></div>


                The largest number representable is therefore
                <div v-katex:display="'(2 - 2^{-23})2^{127} \\approx 2^{128} \\approx 3.4 \\times 10^{38}'"></div>

                and the smallest positive number is

                <div v-katex:display="'2^{-126} \\approx 1.2 \\times 10^{-38}'"></div>

                The binary machine floating-point
                number <span v-katex="'\\varepsilon = 2^{-23}'"></span> is
                called the <deep>machine epsilon</deep> when
                using single precision. It is the smallest
                positive machine number <span katex="'\\varepsilon'"></span> such
                that <span v-katex="'1 + \\varepsilon \\neq 1'"></span>.<br />


                <!--Example 2.8-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 2.8</span>
                    Determine the decimal number that has the following single-precision representation

                    <div v-katex:display="'[0~100~010~10~010~001~000~111~010~000~000~00]_2'"></div>

                    Answer: The stored sign is <span v-katex="'s = 0'"></span>. Thus the number is positive.
                    The stored exponent is


                    <div v-katex:display="'\\begin{aligned} (100~010~10)_2\&= 2^{1} + 2^{3} + 2^{7} \\\\              \&= 2 + 8 + 128 = 138 \\\\ \\textrm{Thus}\\;\\;\\;e-127\&= 138 - 127 = 11              \\end{aligned}'"></div>


                    The fractional part <span v-katex="'f'"></span> is <span katex="'0.010~001~000~111~01'"></span>.
                    The decimal number <span v-katex="'N'"></span> is

                    <div v-katex:display="'\\begin{aligned} N \&= (-1)^s \\times 2^{e - 127} \\times (1.f)_2\\\\  \&=  (1.010~001~000~111~01)\\times 2^{11} \\\\  \&=   1010~001~000~11.1~01 \\\\  \&=   2^{-3} + 2^{-1} + 2^0 + 2^1 + 2^5 + 2^9 + 2^{11} = 2595.625  \\end{aligned}'"></div>

                </div>
                <!--./Example 2.8-->
                <!--Example 2.9-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 2.9</span>

                    Determine the single-precision representation of the decimal -52.234375.<br><br>

                    Answer: We start by converting the decimal into binary form.
                    Converting the integer and fractional part we have,

                    <div v-katex:display="'\\begin{aligned}52\&= (110~100)_2\\\\ 0.234375\&=(0.001~111)_2\\\\ \\textrm{Thus}\\;\\;\\;\\;52.234375\&=(110~100.001~111)_2\\\\                            \&= (1.101~000~011~11)_2 \\times 2^5\\\\ \\end{aligned}'"></div>



                    The sign is <span v-katex="'s = 1'"></span> and
                    the fractional part <span v-katex="'f'"></span> is <span v-katex="'0.101~000~011~11'"></span> and
                    the exponent is <span v-katex="'e'"></span> is

                    <div v-katex:display="' e - 127 = 5 \\Longrightarrow e = 132 = (100~001~00)_2 '"></div>


                </div>

                The 32-bit representation of the number is

                <div v-katex:display="' [1~100~001~00~101~000~011~110~000~000~000~00]_2'"></div>
            </div>
            <!--./Section 2.2.2 end here-->

        </section>
        <!--./section 2.2 end here-->
        <!--Exercice 2.1 start here-->
        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4" style="background-color:#fff3e0" id="ex-1">
            <h4 class="h4-responsive">Exercise 2.2  <deep>Single-Precision floating point form</deep></h4>

            <ol>
                <li>

                    Determine the machine representation in single precision on a 32-bit word
                    length computer (Marc-32) for the following decimal numbers

                    <ol style="list-style-type:lower-latin;">
                        <li>
                            <div v-katex="'7712'"></div>
                        </li>
                        <li>
                            <div v-katex="'-285.75 '"></div>
                        </li>
                        <li>
                            <div v-katex="' -2752'"></div>
                        </li>
                        <li>
                            <div v-katex="'64.015625 '"></div>
                        </li>
                        <li>
                            <div v-katex="'  0.03125'"></div>
                        </li>
                        <li>
                            <div v-katex="'  0.234375'"></div>
                        </li>
                        <li>
                            <div v-katex="'-8 \\times 2^{-24} '"></div>
                        </li>
                        <li>
                            <div v-katex="'\\displaystyle 2^{-127} + 2^{-128} '"></div>
                        </li>
                        <li>
                            <div v-katex="' \\displaystyle 2^{-127} + 2^{-130}'"></div>
                        </li>
                        <li>
                            <div v-katex="' \\displaystyle 2^{-127} + 2^{-150}'"></div>
                        </li>
                    </ol>
                    <br><br>
                </li>

                <li>
                    Determine the decimal numbers that has the following Marc-32
                    representation.
                    <ol style="list-style-type:lower-latin;">
                        <li>
                            <div v-katex="'1~1111~0000~011~0000~0000~0000~0000~0000'"></div>
                        </li>
                        <li>
                            <div v-katex="'0~1000~1010~010~0010~0011~1010~0000~0000'"></div>
                        </li>
                        <li>
                            <div v-katex="'0~1000~0101~000~0000~0000~1000~0000~0000'"></div>
                        </li>
                        <li>
                            <div v-katex="'0~1000~0000~111~1000~0000~0000~0000~0000'"></div>
                        </li>
                        <li>
                            <div v-katex="'1~1000~0100~101~0000~1111~0000~0000~0000'"></div>
                        </li>
                    </ol>
                    <br><br>
                </li>

                <li>
                    Are these machine numbers in the Marc-32? Why?
                    <ol style="list-style-type:lower-latin;">
                        <li>
                            <div v-katex="'\\displaystyle 10^{40}'"></div>
                        </li>
                        <li>
                            <div v-katex="'\\displaystyle 2^{-1} + 2^{-26}'"></div>
                        </li>
                    </ol>
                </li>
            </ol>
        </section>
    </div>

</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'unit2'


    }
</script>
<style>

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

    .theorem {
        background-color: #e2e3e5;
        border: 2px solid;
        border-color: coral;
    }

    theorem-color {
        color: coral;
    }


    deep {
        font-weight: bold;
    }

    .algorithm {
        border: 1px solid;
        border-color: black;
        text-align: center;
    }

    .th {
        margin: 0px;
        border: 1px solid;
        border-color: black;
    }

    move-right {
        margin-left: 20px;
    }


    .katex {
        font-size: clamp(0.75rem, 0.46875rem+0.78125vw, 1.25rem);
    }
</style>
