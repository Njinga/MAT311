<template>
    <mdb-navbar class="fixed-top mt-0 mb-10 mx-4" expand="large" dark color="special">
        <mdb-navbar-brand to="/">
            MAT 311
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav left>
                <mdb-nav-item class="text-left" to="/" active>Home</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/overview">Overview</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit1">UNIT 1</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit2">UNIT 2</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit3">UNIT 3</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit4">UNIT 4</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit5">UNIT 5</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit6">UNIT 6</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit7">UNIT 7</mdb-nav-item>
                <mdb-nav-item class="text-left" to="/unit8">UNIT 8</mdb-nav-item>

            </mdb-navbar-nav>
            <form class="form-inline my-1 text-right">
                <div class="md-form form-sm mr-sm-2 my-0">
                    <input class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search"
                           aria-label="Search">
                </div>
                <button class="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
            </form>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
    import {/* mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer,*/ mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
    export default {
        name: 'Navbar',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            //mdbContainer,
            //mdbDropdown,
           // mdbDropdownToggle,
            //mdbDropdownMenu,
           // mdbDropdownItem
        }
    }



</script>
<style>
    .dropdownsize {
        font-size: 30px;
    }
</style>