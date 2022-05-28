<template>
  <div class="cat">
    <img :src="catInfo.url" :alt="catInfo.id" loading="lazy">
    <div class="button-container">
      <a
        :class="['add-button', {disable: isActive}]"
        @click.prevent="addCatToFavourites"
        @mouseover="isHover = true"
        @mouseout="isHover = false"
        :href="catInfo.url"
      >
        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="isHover || isActive">
          <path d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" fill="#F24E1E"/>
        </svg>
        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg" v-else-if="!isHover">
          <path d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z" fill="#F24E1E"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CatItem',
  props: {
    catInfo: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const isHover = ref(false)
    const isActive = ref(false)

    const addCatToFavourites = () => {
      if (isActive.value) return
      isActive.value = true
      store.dispatch('addCatToFavourite', {
        image_id: props.catInfo.id,
        sub_id: 'User-1'
      })
    }

    watch(() => props.catInfo.id, () => { isActive.value = false })

    return { isHover, isActive, addCatToFavourites }
  }
})
</script>
<style lang="scss" scoped>
.cat{
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
    z-index: 2;
    opacity: 0;
    transition: all .4s ease;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 58.85%);
    .add-button{
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
      &.disable {
        z-index: -1;
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
