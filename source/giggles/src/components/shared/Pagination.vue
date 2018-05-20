<template>
  <ul class="pagination">
    <router-link
      tag="li"
      v-for="(page,index) in pages"
      :key="index"
      :class="{'active':(index === currentPage)}"
      :to="{name: 'Home', params: { page: index + 1 }}"
      @click.native="updatePage()" replace>
        {{index + 1}}
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
        currentPage: 1,
        pageTotal: 0
      }
    },
    computed: {
      pages() {
        return Math.round(store.state.pageTotal / store.state.pageSize);
      }
    },
    methods: {
      updatePage() {
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
        color: #00b3ee;
      }

      &.active {
        border-bottom: 2px solid black;
        cursor: auto;
      }
    }
  }
</style>
