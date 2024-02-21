<script setup>
import { onMounted, ref } from 'vue';


const props = defineProps({
  ownerItem: Object,
})
/** 
  限動外框繪製 使用canvas
*/ 
const canvas = ref(null);
const drawStoryOutline = function() {
  if(canvas.value.getContext) {
    const ctx = canvas.value.getContext('2d')
    ctx.beginPath();
    var grd=ctx.createLinearGradient(0,0,175,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(0.5,"yellow");
    // 外框圖形設定：圓型
    ctx.arc(39,39,36,0,2*Math.PI,true)

    // 已看過顏色為灰 未看過顏色為彩色漸層
    if(!props.ownerItem.isWatched) {
      ctx.fillStyle=grd 
    } else {
      ctx.fillStyle='rgb(224,224,224)';
    }
    ctx.fill() 
    
    // 內部圖形填充：白色圓型
    ctx.beginPath()
    ctx.arc(39,39,34,0,2*Math.PI,true)
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
    <!-- 外框 -->
    <canvas width="78" height="78" ref="canvas" class="position-absolute"></canvas> 
    <!-- 圖片圓形遮蔽 -->    
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
