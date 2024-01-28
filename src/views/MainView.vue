<script setup>
import { ref } from 'vue';
import navComponent from '../components/navComponent.vue';
import storyComponent from '../components/storyComponent.vue';
import postComponent from '../components/postComponent.vue';
import storyModalComponent from '../components/storyModalComponent.vue';
import { getCurrentInstance } from "vue";

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

</script>

<template>
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">

<!-- stories -->
      <div class="stories d-flex justify-content-start align-items-center overflow-scroll w-md-75 mx-auto flex-nowrap mt-md-2">
        <storyComponent @click.prevent="openModal(owner)" v-for="owner in storyOwnerData" :key="owner.storyOwnerId" :ownerItem="owner"/>
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
</style>
