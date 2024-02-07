<script setup>
  import Modal from 'bootstrap/js/dist/modal';
  import { onMounted, ref } from 'vue';

  const modal = ref(null);
  const addNewModal = ref(null);
  const showModal = function() {
    modal.value.show();
    imgSrc.value = "";
  }
  defineExpose({
    showModal,
  })
  onMounted(()=> {
    modal.value = new Modal(addNewModal.value);
  })

  const imgSrc = ref(null);
  const addImage = function(e) {
    let input = e.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          imgSrc.value = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      } 
  }
  
  
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="addNewModal">
    <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="modal-dialog modal-lg">
      <div class="modal-content my-5"> 
        <div class="modal-header d-flex justify-content-center">
          <h5 class="modal-title" id="exampleModalLabel">建立新貼文</h5>
          <button class="btn position-absolute end-0 mx-3 text-primary" v-if="imgSrc">下一步</button>
        </div>

        <div class="modal-body d-flex flex-column align-items-center p-5">
          <div class="d-flex flex-column align-items-center" v-if="!imgSrc">
            <i class="bi bi-image pic-icon"></i>
            <div>將相片和影片拖曳到這裡</div>
            <label for="file-input" class="file-input-button btn btn-primary m-3">從電腦選擇</label>
            <input type="file" id="file-input" accept="audio/*,video/*,image/*" @change="addImage($event)">
          </div>
          <img :src="imgSrc" alt="" class="input-img">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped  lang="scss">
.pic-icon{
  font-size: 7rem;
}
input[type='file'] {
  display: none;
}
.input-img {
  width: 100%;
}

</style>
