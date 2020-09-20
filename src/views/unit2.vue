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

                <!--Remember to insert the line below-->
                <!--after inseting the line remove this paragraph-->
                <p style="font-size:30px; background-color:coral">
                    we should be having a
                    line here , we will deal with that later
                </p>


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

                <!--after defining the diagram remove this paragraph-->
                <p style="font-size:30px; background-color:coral">
                    we should be
                    having a diagram here , we will deal with that later
                </p>


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
        border-color:coral;
        
    }
    theorem-color {
        color:coral;
    }


    deep {
        font-weight: bold;

    }

    .algorithm {
      
        border: 1px solid;
        border-color: black;
        text-align:center;
    }

    .th {
        margin: 0px;
        border: 1px solid;
        border-color: black;
    }
    move-right {
        margin-left:20px;
    }
</style>
