<template>
  <div class="home">
    <HeaderBoscalf />
    <HeroBoscalf />
    <BannerBoscalf />
    <InstagramBoscalf />
    <PartnerBoscalf />
    <FooterBoscalf />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBoscalf from '@/components/HeaderBoscalf.vue'
import HeroBoscalf from '@/components/HeroBoscalf.vue'
import BannerBoscalf from '@/components/BannerBoscalf.vue'
import InstagramBoscalf from '@/components/InstagramBoscalf.vue'
import PartnerBoscalf from '@/components/PartnerBoscalf.vue'
import FooterBoscalf from '@/components/FooterBoscalf.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderBoscalf,
    HeroBoscalf,
    BannerBoscalf,
    InstagramBoscalf,
    PartnerBoscalf,
    FooterBoscalf,
  },
}
</script>
