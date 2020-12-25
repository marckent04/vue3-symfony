<template>
  <div>
    <h2>{{ books }}</h2>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { provide } from 'vue'
import {  useResult } from '@vue/apollo-composable'
import client from './plugins/graphClient'
import {useBookGraph} from './composition/graphql/books'

export default defineComponent({
  name: 'Home',
  setup() {
    //  provide(DefaultApolloClient, client)
    const {getBooks} = useBookGraph()

    let books = getBooks();

    watch(() => books, (newValue: any) => {
      console.log(newValue);
      
    })
    return {
      books,
    }
  }
});
</script>

<style lang="stylus" scoped>

</style>

