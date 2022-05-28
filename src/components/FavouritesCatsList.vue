<template>
  <div class="favourite-cats-list">
    <FavouriteCatItem
      v-for="(cat, ind) of favourites"
      :key="ind"
      :favourite-cat-info="cat"
    />
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import FavouriteCatItem from '@/components/FavouriteCatItem.vue'

export default defineComponent({
  name: 'AllCatsList',
  components: {
    FavouriteCatItem
  },
  setup () {
    const store = useStore()
    const favourites = computed(() => store.getters.favouriteCatsList)
    const getFavoutites = () => store.dispatch('getFavoriteCatsList')

    onMounted(() => getFavoutites())

    return { favourites, getFavoutites }
  }
})
</script>
