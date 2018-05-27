<template>
  <ul class="pagination">
    <router-link
      v-if="(noPages > 0 && page !== 1)"
      tag="li"
      :to="{name: 'Home', params: { page: 1 }}"
      @click.native="goToPage()" replace>
      <<
    </router-link>
    <router-link
      tag="li"
      v-for="(p,index) in noPages"
      :key="index"
      :class="{'active':(index + 1 == page)}"
      :to="{name: 'Home', params: { page: index + 1 }}"
      @click.native="goToPage()" replace>
        {{index + 1}}<br/>
    </router-link>
    <router-link
      v-if="(noPages > 1 && page !== noPages)"
      tag="li"
      :to="{name: 'Home', params: { page: noPages }}"
      @click.native="goToPage()" replace>
      >>
    </router-link>
  </ul>
</template>

<script>
  import {store} from '../data/store'
  import {mapGetters} from 'vuex'

  import router from './../../plugins/router'

  export default {
    name: 'Pagination',
    data() {
      return {
        page: this.$route.params.page,
        pageTotal: 0
      }
    },
    watch: {
      '$route' (to, from) {
        this.page = this.$route.params.page
      },
      page() {
        return this.$route.params.page || 1;
      }
    },
    computed: {
      noPages() {

        let noPages = Math.round(store.state.pageTotal / store.state.pageSize);

        // Redirect to page 1 if user is on a higher page.
        if(this.$route.params.page > noPages) {
          router.push({ path: '/1' });

          // Refresh filtered view.
          store.dispatch('getFilteredGiggles',
            {
              page: 1,
              search: store.state.search || ''
            })
        }

        return noPages;
      }
    },
    methods: {
      goToPage() {
        let self = this;
        store.dispatch('getFilteredGiggles',
          {
            page: self.$route.params.page,
            search: store.state.search || ''
          })
      }
    }
  }
</script>

<style scoped lang="scss">

  .pagination {
    padding: 0;
    text-align: center;

    li {
      color: #00b3ee;
      cursor:pointer;
      display: inline-block;
      list-style-type: none;
      padding: 0 2px;
      text-align: center;

      &:hover {
        color: #007bff;
      }

      &.active {
        border-bottom: 2px solid black;
        color: #007bff;
        cursor: auto;
      }
    }
  }
</style>
