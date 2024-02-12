<script setup>
  import Modal from 'bootstrap/js/dist/modal';
  import { onMounted, ref, getCurrentInstance, computed } from 'vue';

  const modal = ref(null);
  const storyModal = ref(null);
  const progress = ref(0);
  let countTime;

  // TODO 註解
  const showModal = function() {
    progress.value = 0;
    modal.value.show();
    const start = new Date();
    countTime =  setInterval(() => {
      const newTime = new Date();
      const total = storyContent.value[0].duration;
      if(newTime - start >= total) {
        hideModal();
        
      }
      const percentage = Math.round(( (newTime - start) / total) * 100) 
      progress.value = percentage 
    }, 100)
  }
  const progressWidth = computed(()=> {
    return { width: progress.value + '%'};
  });

  const hideModal = function() {
    if(countTime) {
      clearInterval(countTime);
    }
    modal.value.hide();
  };

  defineExpose({
    showModal,
  })
  onMounted(()=> {
    modal.value = new Modal(storyModal.value);
  })

  const props = defineProps(
    {
      'storyOwnerId': String,
    }
  )
  // TODO 可以宣告在上面
  const { proxy } = getCurrentInstance();
  const storyData = ref([]);
  // const getStories = function(){
  proxy.$axios({
      url:'/getStories',
      method:'post'
  },{ storyOwnerId: props.storyOwnerId }).then((res)=>{
    storyData.value = res.data.dataList;
  });
  // }
  // getStories();
  const storyContent = computed(() => {
    return storyData.value.filter((story) => story.storyOwnerId === props.storyOwnerId);
  })
  

</script>

<template>
<!--TODO 參考如bootstrap 寫註解-->
<!-- Modal -->
<div class="modal fade custom-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="storyModal">
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content bg-transparent b-0">
      <div class="modal-body text-end story-modal-body" v-for="story in storyContent" :key="story.storyId">
        <!-- 時間條 -->
        <div class="progress" style="height: 2px;">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="progressWidth"></div>
        </div>
        <div class="d-flex mt-2 justify-content-between align-items-center">
          <div class="rounded-circle user-pic">
            <img src="../assets/images/test.jpg" alt="">
          </div>
          <div class="text-light flex-grow-1 text-start ps-2">{{ story.storyOwnerName }}</div>
          <button type="button" class="btn-close btn-close-white position-relative" data-bs-dismiss="modal" aria-label="Close" @click.prevent="hideModal"></button>
        </div>
        <div class="rounded story-pic-area">
          <img :src="story.img" class="story-content-pic " alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.progress{
  background-color: rgb(169,169,169);
}
.story-pic-area{
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.story-content-pic{
  z-index: -5;
  height: 100%;
}
.modal-backdrop{
  opacity: 1;
}
</style>
