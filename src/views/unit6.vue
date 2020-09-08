<template>
    <div class="unit6">


        <section class="py-3 px-3 mx-4" style="background-color:#fff3e0">
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
                    <div v-katex:display="''"></div>
                    <div v-katex:display="''"></div>
                    <div v-katex:display="''"></div>
                    <div v-katex:display="''"></div>
                    <div v-katex:display="''"></div>
                </div>
                <!--./Section 6.1.3-->
            </div>
            <!--./Section 6.1-->
        </section>
    </div>

</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'unit6'
    }
</script>
