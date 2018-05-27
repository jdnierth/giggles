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
      :class="{'active':(index + 1 === page)}"
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

  export default {
    name: 'Pagination',
    data() {
      return {
        page: 1,
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
        return Math.round(store.state.pageTotal / store.state.pageSize);
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
