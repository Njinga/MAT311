<template>
    <div class="unit6">


        <section class="py-3 px-3 mx-4 grey-text" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 6.Direct methods for solving systems of equations</h3>
        </section>

        <section class="dark-grey-text mb-4 p-3 mx-4">

            <!--Section 5.1-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    6.1 LU factorisation
                </h4>
                <hr class="blue mb-4 mt-0 ">

                In numerical analysis and linear algebra,
                <em>LU</em> decomposition (where "LU" stands for "lower-upper")
                factors a matrix as the product of a lower triangular matrix and
                an upper triangular matrix. Once the matrices have been cast
                into <em>
                    LU
                </em> form, they become easy to invert.
                The <em>
                    LU
                </em> decomposition is used for solving systems of
                linear equations. In this section, we consider three algorithms
                that are used to decompose matrices into <em>LU</em> form.
                <!--Section 6.1.1-->
                <div class="my-3 py-3">
                    <h5 class="h5-responsive font-weight-bold">
                        6.1.1 Doolittle Factorisation
                    </h5>

                    If the lower triangular matrix  <span v-katex="'L'"></span> has
                    1's on its main diagonal, then
                    the  <span v-katex="'LU'"></span> factorisation is called a <em>Doolittle factorization</em>.
                    The structure of a Doolittle factorisation of a matrix  <span v-katex="'A'"></span> of size  <span v-katex="'n \\times n'"></span> is shown below
                    <div v-katex:display="'\\left(\\begin{array}{ccccc} a_{1,1} \& a_{1,2} \& a_{1,3} \& \\cdots\& a_{1,n} \\\\ a_{2,1} \& a_{2,2} \& a_{2,3} \& \\cdots\& a_{2,n} \\\\ a_{3,1} \& a_{3,2} \& a_{3,3} \& \\cdots\& a_{3,n} \\\\ \\cdots\& \\cdots\& \\cdots\& \\cdots\& \\cdots\\\\ a_{n,1} \& a_{n,2} \& a_{n,3} \& \\cdots\& a_{n,n} \\\\ \\end{array} \\right)= \\left(\\begin{array}{ccccc} 1 \& 0 \& 0 \& \\cdots& 0 \\\\ \\ell _{2,1} \& 1 \& 0 \& \\cdots\& 0 \\\\ \\ell _{3,1} \& \\ell _{3,2} \& 1 \& \\cdots& 0 \\\\ \\cdots\& \\cdots\& \\cdots& \\ddots \& \\vdots \\\\ \\ell _{n,1} \& \\ell _{n,2} \& \\ell _{n,3} \& \\cdots \& 1 \\\\ \\end{array}\\right)\\left(\\begin{array}{ccccc} u_{1,1} \& u_{1,2} \& u_{1,3} \& \\cdots\& u_{1,n} \\\\ 0 \& u_{2,2} \& u_{2,3} \& \\cdots\& u_{2,n} \\\\ 0 \& 0 \& u_{3,3} \& \\cdots\& u_{3,n} \\\\ 0 \& 0 \& 0 \& \\ddots \& \\vdots \\\\ 0 \& 0 \& 0 \& 0 \& u_{n,n} \\\\\\end{array}\\right)'"></div>

                </div>
                <!--./Section 6.1.1-->
                <!--Section 6.1.2-->
                <div class="my-3 py-3">
                    <h5 class="h5-responsive font-weight-bold">
                        6.1.2 Crout Factorisation
                    </h5>

                    If the upper triangular matrix <span v-katex="'U'"></span> has 1's
                    on its main diagonal, then the <span v-katex="'LU'"></span> factorisation
                    is called a <em>Crout factorisation</em>. The Crout
                    factorisation structure is shown below;

                    <div v-katex:display="'\\left(\\begin{array}{ccccc} a_{1,1} \& a_{1,2} \& a_{1,3} \& \\cdots\& a_{1,n} \\\\ a_{2,1} \& a_{2,2} \& a_{2,3} \& \\cdots\& a_{2,n} \\\\ a_{3,1} \& a_{3,2} \& a_{3,3} \& \\cdots\& a_{3,n} \\\\ \\cdots\& \\cdots\& \\cdots\& \\cdots& \\cdots\\\\ a_{n,1} \& a_{n,2} \& a_{n,3} \& \\cdots\& a_{n,n} \\\\ \\end{array} \\right)= \\left(\\begin{array}{ccccc} \\ell_{11} \& 0 \& 0 \& \\cdots\& 0 \\\\ \\ell _{2,1}\ & \\ell_{22} \& 0 \& \\cdots\& 0 \\\\ \\ell _{3,1} \& \\ell _{3,2} \& \\ell_{33} \& \\cdots& 0 \\\\ \\cdots\& \\cdots\& \\cdots\& \\ddots \& \\vdots \\\\ \\ell _{n,1} \& \\ell _{n,2} \& \\ell _{n,3} \& \\cdots \& \\ell_{nn} \\\\ \\end{array}\\right)\\left(\\begin{array}{ccccc} 1 \& u_{1,2} \& u_{1,3} \& \\cdots\& u_{1,n} \\\\ 0 \& 1 \& u_{2,3} \& \\cdots\& u_{2,n} \\\\ 0 \& 0 \& 1 \& \\cdots\& u_{3,n} \\\\ 0 \& 0 \& 0 \& \\ddots \& \\vdots \\\\ 0 \& 0 \& 0 \& 0 \& 1 \\\\ \\end{array} \\right)'"></div>
                </div>
                <!--./Section 6.1.2-->
                <!--Section 6.1.3-->
                <div class="my-3 py-3">
                    <h5 class="h5-responsive font-weight-bold">
                        6.1.3 Naive Gaussian Elimination
                    </h5>

                    Consider the problem of solving the matrix equation <span v-katex="'A\\textbf{X} = \\textbf{b}'"></span>

                    <div v-katex:display="'\\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 4\&	5\&	-3\&	6\\\\ -2\&	5\&	-2\&	6\\\\ 4\&	11\&	-4\&	8\\\\ \\end{bmatrix} \\begin{bmatrix} x_1\\\\x_2\\\\x_3\\\\x_4 \\\\\\end{bmatrix} = \\begin{bmatrix} -3\\\\-7\\\\-10\\\\-2 \\end{bmatrix}'"></div>

                    A series of elementary row operations (known as forward elimination) can reduce the coefficient matrix to upper triangular form


                    <div v-katex:display="'\\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	0\&	-1\&	4\\\\ 0\&	0\&	 0\&	2\\\\ \\end{bmatrix} \\begin{bmatrix} x_1\\\\x_2\\\\x_3\\\\x_4 \\end{bmatrix} = \\begin{bmatrix} -3\\\\-7\\\\-10\\\\-2 \\end{bmatrix}'"></div>

                    The forward elimination phase can be interpreted
                    as multiplying the matrix equation, <span v-katex="'A\\textbf{x} =\\textbf{b}'"></span> by a matrix <span v-katex="'M'"></span>

                    <div v-katex:display="'M(A\\textbf{x}) = M\\textbf{b}'"></div>

                    where  <span v-katex="'M'"></span> is selected in such a way that   <span v-katex="'MA'"></span> is upper triangular. That is

                    <div v-katex:display="'MA = \\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	0\&	-1\&	4\\\\ 0\&	0\&	 0\&	2\\\\ \\end{bmatrix} = U'"></div>

                    The first step of the forward elimination procedure of the <i>naive Gaussian elimination</i> process gives

                    <div v-katex:display="' \\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	6\&	-3\&	8\\\\ 0\&	9\&	-2\&	4\\\\ \\end{bmatrix} \\begin{bmatrix} x_1\\\\x_2\\\\x_3\\\\x_4 \\end{bmatrix} = \\begin{bmatrix} -3\\\\-1\\\\-13\\\\-4 \\end{bmatrix}'"></div>

                    This result can be obtained by multiplying by a lower triangular matrix <span v-katex="'M_1'"></span>:

                    <div v-katex:display="'M_1 A\\textbf{x} = M_1 \\textbf{b}'"></div>
                    where
                    <div v-katex:display="'M_1 = \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ -2\&	1\&	0\&	0\\\\ 1\&	0\&	1\&	0\\\\ -2\&	0\&	0\&	1\\\\ \\end{bmatrix}'"></div>

                    Note that row operations used in the first step are

                    <div v-katex:display="'\\begin{array}{cccccc} R_2 \&\\rightarrow& R_2\&-\&2R_1\\\\ R_3 \&\\rightarrow& R_3\&+\&R_1\\\\ R_4 \&\\rightarrow& R_4\&-\&2R_1\\\\ \\end{array}.'"></div>

                    Accordingly, the matrix <span v-katex="'M_1'"></span> is an upper triangular matrix formed by setting the diagonal elements to be all 1's. The only other
                    non-zero elements are those in the first column
                    which are the multipliers in the row operations used.<br /><br />


                    The second forward elimination step gives

                    <div v-katex:display="'\\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	0\&	-1\&	4\\\\ 0\&	0\&	1\&	-2\\\\ \\end{bmatrix} \\begin{bmatrix} x_1\\\\x_2\\\\x_3\\\\x_4 \\end{bmatrix} = \\begin{bmatrix} -3\\\\-1\\\\-11\\\\7 \\end{bmatrix}'"></div>

                    This is equivalent to
                    <div v-katex:display="'M_2M_1A\\textbf{x} = M_2M_1\\textbf{b}'"></div>

                    Note that the row operations used in this step are

                    <div v-katex:display="'\\begin{array}{ccccc} R_3 \&\\rightarrow& R_3\&-\&2R_2\\\\ R_4 \&\\rightarrow& R_4\&-\&3R_2\\\\ \\end{array}.'"></div>

                    Thus,
                    <div v-katex:display="'M_2 = \\begin{bmatrix}1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	-2\&	1\&	0\\\\ 0\&	-3\&	0\&	1\\\\ \\end{bmatrix}'"></div>
                    The third step gives the upper triangular form

                    <div v-katex:display="'\\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	0\&	-1\&	4\\\\ 0\&	0\&	 0\&	2\\\\ \\end{bmatrix}\\begin{bmatrix} x_1\\\\x_2\\\\x_3\\\\x_4 \\end{bmatrix} = \\begin{bmatrix} -3\\\\-1\\\\-11\\\\-4 \\end{bmatrix}'"></div>

                    which is equivalent to
                    <div v-katex:display="'M_3M_2M_1A\\textbf{x} =M_3M_2M_1\\textbf{b}.'"></div>

                    Since the row operation used is

                    <div v-katex:display="'\\begin{array}{ccccc}R_4 \&\\rightarrow& R_4\&+\&R_3\\\\ \\end{array}'"></div>

                    It follows that

                    <div v-katex:display="'M_3 = \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	0\&	1\&	0\\\\ 0\&	0\&	1\&	1\\\\ \\end{bmatrix}'"></div>

                    Thus, the matrix <span v-katex="'M'"></span> can be obtained as a product of the three multiplier matrices:

                    <div v-katex:display="'M = M_3M_2M_1'"></div>

                    The forward elimination process can thus be interpreted as follows:

                    <div v-katex:display="'\\begin{aligned} MA\& = U\\\\ A\&=M^{-1}U\\\\ \&=M_1^{-1}M_2^{-1}M_3^{-1}U\\\\ \&=LU \\end{aligned}'"></div>

                    where <span v-katex="'L = M_1^{-1}M_2^{-1}M_3^{-1}'"></span>. The
                    inverses <span v-katex="'M_1^{-1}, M_2^{-1},M_3^{-1}'"></span> can
                    be obtained by simply changing the signs of the multipliers. Thus, we have



                    <div v-katex:display="'L = \\begin{bmatrix}	 1\&	0\&	0\&	0\\\\2\&	1\&	0\&	0\\\\ -1\&	0\&	1\&	0\\\\ 2\&	0\&	0\&	1\\\\ \\end{bmatrix} \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	2\&	1\&	0\\\\ 0\&	3\&	0\&	1\\\\ \\end{bmatrix} \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	0\&	1\&	0\\\\ 0\&	0\&	-1\&	1\\\\ \\end{bmatrix}	= \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 2\&	1\&	0\&	0\\\\ -1\&	2\&	1\&	0\\\\ 2\&	3\&	-1\&	1\\\\ \\end{bmatrix}'"></div>

                    <br /><br />
                    <dpan class="font-weight-bold">Step 1 </dpan>

                    <div v-katex:display="'\\begin{array}{cccccc} R_2 \&\\rightarrow& R_2\&-\&2R_1\\\\ R_3 \&\\rightarrow& R_3\&+\&R_1\\\\ R_4 \&\\rightarrow& R_4\&-\&2R_1\\\\ \\end{array}\\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	6\&	-3\&	8\\\\ 0\&	9\&	-2\&	4\\\\ \\end{bmatrix}'"></div>

                    <div v-katex:display="'M_1 = \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ -2\&	1\&	0\&	0\\\\ 1\&	0\&	1\&	0\\\\ -2\&	0\&	0\&	1\\\\ \\end{bmatrix} ,\\;\\;\\; M_1^{-1}  = \\begin{bmatrix}  1\&	0\&	0\&	0\\\\ 2\&	1\&	0\&	0\\\\ -1\&	0\&	1\&	0\\\\ 2\&	0\&	0\&	1\\\\ \\end{bmatrix}'"></div>


                    <dpan class="font-weight-bold">Step 2 </dpan>
                    <div v-katex:display="'\\begin{array}{ccccc} R_3 \&\\rightarrow& R_3\&-\&2R_2\\\\ R_4 \&\\rightarrow& R_4\&-\&3R_2\\\\ \\end{array}\\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	0\&	-1\&	4\\\\0\&	0\&	1\&	-2\\\\ \\end{bmatrix}'"></div>
                    <div v-katex:display="'M_2 = \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	-2\&	1\&	0\\\\ 0\&	-3\&	0\&	1\\\\ \\end{bmatrix} ,\\;\\;\\;\\; M_2^{-1} = \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	2\&	1\&	0\\\\ 0\&	3\&	0\&	1\\\\ \\end{bmatrix}'"></div>

                    <dpan class="font-weight-bold">Step 3 </dpan>

                    <div v-katex:display="'\\begin{array}{ccccc} R_4 \&\\rightarrow\& R_4\&+\&R_3\\\\ \\end{array} \\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	0\&	-1\&	4\\\\ 0\&	0\&	 0\&	2\\\\ \\end{bmatrix}'"></div>
                    <div v-katex:display="'M_3 = \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	0\&	1&	0\\\\ 0\&	0\&	1\&	1\\\\ \\end{bmatrix},\\;\\;\\;\\;  M_3^{-1} = \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	0\&	1\&	0\\\\ 0\&	0\&	-1\&	1\\\\ \\end{bmatrix}'"></div>
                    <div v-katex:display="'U  = \\begin{bmatrix} 2\&	1\&	-1\&	2\\\\ 0\&	3\&	-1\&	2\\\\ 0\&	0\&	-1\&	4\\\\ 0\&	0\&	0\&	2\\\\ \\end{bmatrix}'"></div>


                    <div v-katex:display="' \\begin{aligned} L	\&=	M_1^{-1}M_2^{-1}M_3^{-1}\\\\	\&=	\\begin{bmatrix}	1\&	0\&	0\&	0\\\\ 2\&	1\&	0\&	0\\\\ -1\&	0\&	1\&	0\\\\ 2\&	0\&	0\&	1\\\\ \\end{bmatrix} \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	2\&	1\&	0\\\\ 0\&	3\&	0\&	1\\\\ \\end{bmatrix} \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 0\&	1\&	0\&	0\\\\ 0\&	0\&	1\&	0\\\\ 0\&	0\&	-1\&	1\\ \\end{bmatrix} \\\\	\&= \\begin{bmatrix} 1\&	0\&	0\&	0\\\\ 2\&	1\&	0\&	0\\\\ -1\&	2\&	1\&	0\\\\ 2\&	3\&	-1\&	1\\\\ \\end{bmatrix} \\end{aligned}'"></div>



                </div>
                <!--./Section 6.1.3-->
            </div>
            <!--./Section 6.1-->
            <!--Section 6.2-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    6.2 Solving linear equations using  <span v-katex="'LU'"></span> factorisation
                </h4>
                <hr class="blue mb-4 mt-0 ">

                Assume that  <span v-katex="'A'"></span> has a  <span v-katex="'LU'"></span> factorization.  The solution  <span v-katex="'X'"></span> to the linear system  <span v-katex="'AX = b'"></span> , as follows:
                <div v-katex:display="'                \\begin{aligned}              AX \&=b\\\\                LUX\&=b \\\\                LZ \&=b,\\;\\;\\;\\; \\textrm{where}\\;\\; Z=UX;                \\end{aligned}'"></div>

                To solve the matrix equation for <span v-katex="'X'"></span>, first we solve <span v-katex="'LZ=b'"></span> for <span v-katex="'Z'"></span> using the forward-substitution method, then solve <span v-katex="'UX=Z'"></span> for <span v-katex="'X'"></span> by backward-substitution method.<br />
                <!--Example 6.1-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 6.1</span>
                    Find the <span v-katex="'LU'"></span> factorisation of the matrix <span v-katex="'A'"></span> in which <span v-katex="'L'"></span> is a unit lower triangular matrix and U is an upper triangular matrix

                    <div v-katex:display="'A=\\begin{bmatrix}     4\& -6\& -5\\\\      4\& -5\& -5\\\\      -8\& 2\& -6      \\end{bmatrix}'"></div>
                    and use the LU factorization to solve the linear system



                    <div v-katex:display="'  \\begin{aligned}      4 x_1 - 6x_2 - 5 x_3 \&=-50\\\\      4 x_1 - 5x_2 - 5 x_3 \&=-47\\\\      - 8 x_1 + 2x_2 - 6 x_3 \&=6      \\end{aligned}'"></div>

                    <i>Solution</i><br /><br />
                    Denote the <span v-katex="'L'"></span> and <span v-katex="'U'"></span> matrices by


                    <div v-katex:display="'L = \\left( \\begin{array}{ccc} 1 \& 0 & 0  \\\\ \\ell _{2,1} \& 1 \& 0\\\\ \\ell _{3,1} & \\ell _{3,2} \& 1 \\end{array} \\right)\\;\\;\\;\\;\\textrm{and}\\;\\;\\;\\; U = \\left( \\begin{array}{ccccc}  u_{1,1} \& u_{1,2} \& u_{1,3}  \\\\  0 \& u_{2,2} \& u_{2,3} \\\\ 0 \& 0 \& u_{3,3} \\end{array} \\right)'"></div>
                    so that the equation <span v-katex="'LU = A'"></span> is represented as



                    <div v-katex:display="'\\left( \\begin{array}{ccc} 1 \& 0 \& 0  \\\\  \\ell _{2,1} \& 1 \& 0\\\\ \\ell _{3,1} \& \ell _{3,2} \& 1  \\end{array} \\right)\\left( \\begin{array}{ccccc} u_{1,1} & u_{1,2} \& u_{1,3}  \\\\ 0 \& u_{2,2} \& u_{2,3} \\\\ 0 \& 0 \& u_{3,3} \\end{array} \\right) = \\left(\\begin{array}{ccc} 4\&	-6\&	-5\\\\ 4\&	-5\&	-5\\\\ -8\&	 2\&	-6 \\end{array} \\right)'"></div>

                    Multiplying the matrix equation and solving for
                    the unknowns in succession gives


                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'\\begin{aligned}\&u_{1,1} = 4\\\\ \&u_{1,1}\\ell_{2,1} = 4\\\\ \&u_{1,1}\\ell_{3,1} = -8 \\end{aligned}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'\\begin{aligned} \&u_{1,1} = 4\\\\ \&\\ell_{2,1} = 1\\\\ \&\\ell_{3,1} = -2 \\end{aligned}'"></div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'\\begin{aligned}\&u_{1,2} = -6\\\\\&u_{2,2}+u_{1,2}\\ell_{2,1} = -5\\\\ \&u_{1,2}\\ell_{3,1}+u_{2,2}\\ell_{3,2} = 2 \\end{aligned}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'\\begin{aligned} \&u_{1,2} = -6\\\\ \&u_{2,2} = 1\\\\ \&\\ell_{3,2} = -10 \\end{aligned}'"></div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'\\begin{aligned} \&u_{1,3} = -5\\\\ \&u_{2,3}+u_{1,3}\\ell_{2,1} = -5\\\\ \&u_{3,3}+u_{1,3}\\ell_{3,1} + u_{2,3}\\ell_{3,2} = -6 \\end{aligned}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'\\begin{aligned}\&u_{1,3} = -5\\\\ \&u_{2,3} = 0\\\\ \&u_{3,3} = -16 \\end{aligned}'"></div>
                            </div>
                        </div>
                    </div>

                    Then, we have

                    <div v-katex:display="' L = \\left(\\begin{array}{ccc} 1\&	0\&	0\\\\ 1\&	1\&	0\\\\ -2\&	-10\&1 \\end{array}\\right) \\;\\;\\;\\; \\textrm{and }\\;\\;\\;\\; U = \\left( \\begin{array}{ccc} 4\&	-6\&	-5\\\\ 0\&	1\&	0\\\\ 0\&	0\&	-16 \\end{array}\\right)'"></div>

                    Using the <span v-katex="'LU'"></span> factorisation of <span v-katex="'A'"></span>, we can write <span v-katex="'Ax  = b'"></span> as


                    <div v-katex:display="'Ax = (LU)x = L(Ux) = b'"></div>


                    The matrix equation can be written as <span v-katex="'Lz = b'"></span>, where <span v-katex="'z = Ux'"></span>.
                    Thus, the equation system can be solved in two steps by solving

                    <div v-katex:display="'\\begin{aligned}Lz	\&=	b\\\\ Ux	\&=	z \\end{aligned}'"></div>

                    The solution for <span v-katex="'z'"></span> is obtained from <span v-katex="'Lz = b'"></span> as

                    <div v-katex:display="'\\left(\\begin{array}{ccc} 1\&	0\&	0\\\\ 1\&	1\&	0\\\\ -2\&	-10\&1\\\\ \\end{array} \\right) \\left( \\begin{array}{c} z_1\\\\ z_2\\\\ z_3 \\end{array} \\right) =  \\left(  \\begin{array}{c}  -50\\\\ -47\\\\ 6 \\end{array} \\right)'"></div>

                    Since <span v-katex="'L'"></span> is lower triangular, we can use forward substitution to obtain

                    <div v-katex:display="'\\begin{aligned} z_1 \&= -50\\\\ z_2	\&=-47 - z_1 =  -47 - (-50) = 3\\\\ z_3	\&=6 +2z_1 + 10z_2 = 6  + 2(-50)+ 10(3) = -64 \\end{aligned}'"></div>

                    The equation <span v-katex="'Ux = z'"></span> becomes

                    <div v-katex:display="'\\left(\\begin{array}{ccc}4\& -6\&	-5\\\\0\&	1\&	0\\\\0\&	0\&	-16\\end{array}\\right)\\left(\\begin{array}{c}x_1\\\\x_2\\\\x_3\\end{array} \\right) = \\left(\\begin{array}{c}-50\\\\3\\\\-64 \\end{array} \\right)'"></div>

                    Finally, we apply backward substitution to solve for <span v-katex="'x'"></span> as follows:

                    <div v-katex:display="'\\begin{aligned} x_3 \&= 4\\\\ x_2 \&=3\\\\ x_1 \&= \\frac{1}{4}(-50 +6x_2 + 5x_3) =	\\frac{1}{4}[-50 +6(3) + 5(4)] = -3  \\end{aligned}'"></div>
                </div>
                <!--./Example 6.1-->
                <!--Exercise 6.1-->
                <div class="my-4 p-3" style="background-color:#fff3e0">
                    <h5 class="h4-responsive">Exercise 6.1  <deep>LU Decomposition</deep></h5>

                    <ol>
                        <li>
                            <ol style="list-style:lower-latin">
                                <li>

                                    Use the Dolittle method to find the $LU$ factorisation of the following matrices
                                    <div v-katex:display="' A =                                   \\begin{bmatrix}                                   5 \& 6 \& -5 \\\\                                   25 \&36\& -28\\\\                                    -10\& 18\& -10\\\\                                    \\end{bmatrix},\\;\\;\\;\\;\\;\\;\\                                   B = \\begin{bmatrix}                                    4 \& 6 \& -6 \\\\                                    24 \& 34 \&-32 \\\\                                     -20\& -34\& 40\\\\                                   \\end{bmatrix}'"></div>
                                    <div v-katex:display="'                                                                          C = \\begin{bmatrix}                                   -2 \& -1\& 6\\\\                                   8 \& 6 \&-29\\\\                                   -12\& -6\& 31\\\\                                    \\end{bmatrix} '"></div>

                                    <div v-katex:display="' '"></div>

                                  
                                </li>
                                <li>
                                    <ol style="list-style:lower-roman">
                                        <li>
                                            Use the <span v-katex="'LU'"></span> results obtained in (a) above to solve the following systems of equations

                                                    <ol style="list-style:upper-latin">
                                                        <li>
                                                            <div v-katex:display="'\\begin{array}{ccccccc} 5 x_1 \&+\& 6 x_2 \&-\& 5 x_3 &= \&60\\\\ 25 x_1 \&+\& 36 x_2 \&-\& 28 x_3 \&= \&339\\\\ - 10 x_1 \&+\& 18 x_2 \&-\& 10 x_3 \&=\& 90 \\end{array}  '"></div>
                                                        </li>
                                                        <li>
                                                            <div v-katex:display="'\\begin{array}{ccccccc} 4 x_1 \&+\& 6 x_2 \&-\& 6 x_3 \&=\& 8\\\\ 24 x_1 \&+\& 34 x_2 \&-\& 32 x_3 \&=\& 30\\\\ - 20 x_1 \&-\& 34 x_2 \&+\& 40 x_3 \&=\& -86\\\\ \\end{array} '"></div>
                                                        </li>
                                                        <li>
                                                            <div v-katex:display="'                                                                  \\begin{array}{ccccccc} - 2 x_1 \&-\& x_2 \&+\& 6 x_3 \&=\& -17\\\\ 8 x_1 \&+\& 6 x_2 \&-\& 29 x_3 \&=\& 82\\\\ - 12 x_1 \&-\& 6 x_2 \&+\& 31 x_3 \&=\& -82 \\end{array}'"></div>
                                                        </li>
                                                    </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>
                            Use the Crout method to solve the problems in 1(a) and 1(b) above.
                        </li>
                        <li>
                            Use the naive Gaussian elimination method to decompose the following matrices into <span v-katex="'LU'"></span> form and solve the corresponding system of equations.

                            <ol style="list-style:lower-latin">
                                <li style="margin-bottom:50px;">
                                    <div v-katex:display="'A = \\begin{bmatrix} -7 \&1\& 3\& 1\\\\ 56\& -15\& -22\& -9\\\\ -42\& 27\& 14\& 6\\\\ 7\& -43\& 1\& 6\\\\ \\end{bmatrix}'"></div>
                                    <div v-katex:display="'\\begin{array}{ccccccccc} - 7 x_1 \&+\& x_2 \&+\& 3 x_3 \&+\& x_4 \&=\& -3\\\\ 56 x_1 \&-\& 15 x_2 \&-\& 22 x_3 \&-\& 9 x_4 \&=\& 47\\\\ - 42 x_1 \&+\& 27 x_2 \&+\& 14 x_3 \&+\& 6 x_4 \&=\& -72\\\\ 7 x_1 \&-\& 43 x_2 \&+\& x_3 \&+\& 6 x_4 \&=\& 78\\\\ \\end{array}'"></div>
                                </li>
                                <li style="margin-bottom:50px;">
                                    <div v-katex:display="'B =\\begin{bmatrix} -1\& 8\& 5\& -4 \\\\ 8\& -59\& -45\& 33 \\\\ -4\& 2 \&42\& -23\\\\ 3\& -49\& 2\& 14\\\\ \\end{bmatrix}'"></div>
                                    
                                    
                                    <div v-katex:display="'\\begin{array}{ccccccccc} - x_1 \&+\& 8 x_2 \&+\& 5 x_3 \&-\& 4 x_4 \&=\& 5\\\\ 8 x_1 \&-\& 59 x_2 \&-\& 45 x_3 \&+\& 33 x_4 \&=\& -8\\\\ - 4 x_1 \&+\& 2 x_2 \&+\& 42 x_3 \&-\& 23 x_4 \&=\& -150\\\\ 3 x_1 \&-\& 49 x_2 \&+\& 2 x_3 \&+\& 14 x_4\& =\& -137 \\end{array}'"></div>
                                </li>
                                <li>
                                    <div v-katex:display="'C = \\begin{bmatrix} 4\& 6\& 4\& 0\\\\ 20\& 27\& 14\& -1\\\\ -16\& -3\& 18\& 3\\\\ 8 \&-6\& 36\& 27\\\\ \\end{bmatrix}'"></div>
                                    
                                    <div v-katex:display="'\\begin{array}{ccccccccc} 4 x_1 \&+\& 6 x_2 \&+\& 4 x_3\&\& \&=\& 10\\\\ 20 x_1 \&+\& 27 x_2 \&+\& 14 x_3 \&-\& x_4 \&=\& 46\\\\ - 16 x_1 \&-\& 3 x_2 \&+\& 18 x_3 \&+\& 3 x_4 \&=\& 0\\\\ 8 x_1 \&-\& 6 x_2 \&+\& 36 x_3 \&+\& 27 x_4 \&=\& -99 \\end{array}'"></div>
                                </li>
                            </ol>
                        </li>
                    </ol>

                </div>

                <!--./Exercise 6.1-->
            </div>
            <!--./Section 6.2-->
        </section>
    </div>

</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'unit6'
    }
</script>
