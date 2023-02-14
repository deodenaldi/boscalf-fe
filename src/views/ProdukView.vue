<template>
    <div class="product">
        <HeaderBoscalf />
        <p>
            Test
        </p>
        <FooterBoscalf />
    </div>
</template>

<script>
// @ is an alias to /src
import HeaderBoscalf from '@/components/HeaderBoscalf.vue'
import FooterBoscalf from '@/components/FooterBoscalf.vue'

export default {
    name: 'ProductView',
    components: {
        HeaderBoscalf,
        FooterBoscalf,
    },
}
</script>
