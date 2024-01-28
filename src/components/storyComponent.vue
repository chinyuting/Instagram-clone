<script setup>

const props = defineProps({
  ownerItem: Object,
})
</script>

<template>
  <div class="border border-2 rounded-circle story m-1 flex-shrink-0 p-1">
    <img :src="ownerItem.storyOwnerPic" alt="">
  </div>
</template>

<style>
.story{
  height: 70px;
  width: 70px;
  overflow: hidden;
  object-fit: contain;
  position: relative;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150%;
  }
}
@media (min-width: 768px) {
  .stories {
    max-width: 550px;
  }
}
</style>
