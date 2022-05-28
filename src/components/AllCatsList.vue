<template>
  <div class="all-cats-list">
    <CatItem
      v-for="(cat, ind) of list"
      :key="ind"
      :cat-info="cat"
    />
  </div>
  <button @click="getNewCatsList" class="get-more">... загружаем еще котиков ...</button>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import CatItem from '@/components/CatItem.vue'

export default defineComponent({
  name: 'AllCatsList',
  components: {
    CatItem
  },
  setup () {
    const store = useStore()
    const list = computed(() => store.getters.catsList)
    const getNewCatsList = () => store.dispatch('getRandomCatsList')
    onMounted(() => getNewCatsList())
    return { list, getNewCatsList }
  }
})
</script>

<style lang="scss" scoped>
.get-more{
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #000000;
  margin-bottom: 31px;
}
</style>
