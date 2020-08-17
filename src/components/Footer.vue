<template>
    <!-- Footer -->
    <mdb-footer class=" special-color-dark pt-2 mt-4 mx-4">

        <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
                <div class="row">
                
                    <div class="col">
                        &copy;2020 Prof.S.S.Motsa
                    </div>
                  
                </div>
            </mdb-container>
        </div>
    </mdb-footer>
    <!-- Footer -->
</template>

<script>
    import { mdbFooter, mdbContainer } from 'mdbvue';
    export default {
        name: 'Footer',
        components: {
            mdbFooter,
            mdbContainer

        }
    }


</script>