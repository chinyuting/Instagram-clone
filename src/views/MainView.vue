<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import navComponent from '../components/navComponent.vue';
import storyComponent from '../components/storyComponent.vue';
import postComponent from '../components/postComponent.vue';
import storyModalComponent from '../components/storyModalComponent.vue';

const { proxy } = getCurrentInstance();
const storyOwnerData = ref([]);
// const getStory = function(){
proxy.$axios({
    url:'/getStoryOwner',
    method:'post'
},{ userId: '123' }).then((res)=>{
  storyOwnerData.value = res.data.dataList;
});
// }
// getStory();

const storyModal = ref(null);
let storyOwner = ref('');

const openModal = function(owner) {
  storyOwner.value = owner.storyOwnerId;
  storyModal.value.showModal();
}


let position = ref(0);
let leftIsShow = ref(false);
let rightIsShow = ref(true);
let left = 1;
let right = 7;

const moveNum = 3;

const positionCount = function(n) {
  const storyLen = storyOwnerData.value.length;
  if(storyLen - right < moveNum && n===-1) {
    position.value += n*(storyLen - right)*(78);
    left += (storyLen - right);
    right += (storyLen - right);
  } else if(left-moveNum < 0 && n===1) {
    position.value += n*(moveNum-left)*(78);
    right += (left-moveNum);
    left += (left-moveNum);
  }
  else{
    position.value += n*moveNum*(78);
    left += n*(-moveNum);
    right += n*(-moveNum);
    
  }
  leftIsShow = ref( left !== 1);
  rightIsShow = ref( right <  storyLen);
}
const story = computed(() => {
  return { transform: `translate(${position.value}px)` };
})

</script>

<template>
  <div class="row mx-0">
    <navComponent/>
    <main class="col m-0 border-start min-vh-100"> 

<!-- stories -->
      <div class="stories overflow-scroll w-md-75 mx-auto flex-nowrap mt-md-2 position-relative">
        <div class="d-flex justify-content-start align-items-center ">
          <storyComponent @click.prevent="openModal(owner)" v-for="owner in storyOwnerData" :key="owner.storyOwnerId" :ownerItem="owner" :style="story"/>
        </div>
        <button type="button" class="position-absolute top-50 start-0 translate-middle-y btn" @click.prevent="positionCount(1)" v-if="leftIsShow">
          <i class="bi bi-arrow-left-circle-fill icon-size text-light"></i>
        </button>
        <button type="button" class="position-absolute top-50 end-0 translate-middle-y btn"
        @click.prevent="positionCount(-1)" v-if="rightIsShow ">
          <i class="bi bi-arrow-right-circle-fill icon-size text-light"></i>
        </button>
      </div>
      <storyModalComponent ref="storyModal" :storyOwnerId="storyOwner"/>
<!-- post component -->
      <div class="d-flex flex-column justify-content-center align-items-center mb-5">
        <!-- v-for -->
        <postComponent />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.row main{
  padding: 0;
}
// .story{
//   transition: transform 0.3s ease-in-out;
// }
@media (min-width: 768px) {
  .stories {
    max-width: 546px;
  }
}
</style>
