<script setup>
import { onMounted, ref } from 'vue';


const props = defineProps({
  ownerItem: Object,
})
const canvas = ref(null);
/** 
限動外框繪製 
*/ 
const drawStoryOutline = function() {
  if(canvas.value.getContext) {
    const ctx = canvas.value.getContext('2d');
    // 外框顏色設定
    ctx.beginPath();
    var grd=ctx.createLinearGradient(0,0,175,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(0.5,"yellow");

    // 外框圖形設定
    ctx.arc(39,39,36,0,2*Math.PI,true) //畫圓
    
    // 已看過顏色為灰，未看過顏色為漸層
    if(!props.ownerItem.isWatched) {
      ctx.fillStyle=grd 
    } else {
      ctx.fillStyle='rgb(224,224,224)';
    }
    ctx.fill() 

    // canvas 中心為空白
    ctx.beginPath()
    ctx.arc(39,39,34,0,2*Math.PI,true) //畫圓
    ctx.fillStyle='white' 
    ctx.fill() 
  }
}

onMounted(()=> {
  drawStoryOutline();
})
</script>

<template>
  <div>
    <canvas width="78" height="78" ref="canvas" class="position-absolute"></canvas>      
    <div class="rounded-circle story m-1 flex-shrink-0 p-1">
      <img :src="ownerItem.storyOwnerPic" alt="">
    </div>
  </div>
</template>


<style lang="scss">
.story{
  height: 70px;
  width: 70px;
  overflow: hidden;
  object-fit: contain;
  position: relative;
  border: 3px solid transparent;
  background-clip: padding-box;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150%;
  }
}
</style>
