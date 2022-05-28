<template>
  <div class="favourite-cat">
    <img :src="favouriteCatInfo.image.url" :alt="favouriteCatInfo.image_id" loading="lazy">
    <div class="button-container">
      <a
        class="delete-button"
        @click.prevent="deleteCatFromFavourites"
        :href="favouriteCatInfo.image.url"
      >
        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" fill="#F24E1E"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'FavouriteCatItem',
  props: {
    favouriteCatInfo: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const isHover = ref(false)

    const deleteCatFromFavourites = () => {
      store.dispatch('deleteCatFromFavourite', props.favouriteCatInfo.id)
      store.dispatch('getFavoriteCatsList')
    }
    return { isHover, deleteCatFromFavourites }
  }
})
</script>
<style lang="scss" scoped>
.favourite-cat{
  position: relative;
  cursor: pointer;
  width: 225px;
  height: 225px;
  transition: all .4s ease;
  img{
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .button-container{
    position: absolute;
    width: 100%;
    height: 36%;
    bottom: 0;
    opacity: 0;
    transition: all .4s ease;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 58.85%);
    .delete-button{
      position: absolute;
      width: 50px;
      height: 50px;
      right: 19px;
      bottom: 24.3px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      svg{
        z-index: -1;
      }
      &:active svg path{
        fill:#FF3A00;
      }
    }
  }
  &:hover{
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
    transform: scale(1.135);
    .button-container{
      opacity: 1;
    }
  }
}
.added {background: #f00;}
</style>
