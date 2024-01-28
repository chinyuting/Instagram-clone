<script setup>

</script>

<template>
  <div class="col-md-2 nav-all ps-md-4 overflow-hidden">
    <div class="justify-content-start">
      <nav class="navbar navbar-light header-nav my-md-3 my-sm-0">
        <img src="../assets/images/Instagram_logo_light.png" alt="" class="logo">
      </nav>
    </div>
   
    <div class="d-flex justify-content-center justify-content-md-start">
      <nav class="bg-body my-md-3 nav-selection align-items-md-stretch d-flex flex-md-column">
        <div class="nav-item rounded">
          <RouterLink to="/" class="mx-4 mx-md-0 text-decoration-none text-secondary d-flex px-2">
            <div><i class="bi bi-house-door icon-size"></i></div>
            <div><span class="d-none d-lg-inline p-2">首頁</span></div>
          </RouterLink>
        </div>
        <div class="nav-item rounded">
          <RouterLink to="/addNew" class="mx-4 mx-md-0 text-decoration-none text-secondary d-flex px-2">
            <div><i class="bi bi-plus-square icon-size "></i></div>
            <div><span class="d-none d-lg-inline p-2">建立</span></div>
          </RouterLink>
        </div>
        <div class="nav-item rounded">
          <RouterLink to="/profile" class="mx-4 mx-md-0 text-decoration-none text-secondary d-flex px-2">
            <div><i class="bi bi-person-circle icon-size"></i></div>
            <div><span class="d-none d-lg-inline p-2">個人檔案</span></div>
          </RouterLink>
        </div>
      </nav>
    </div>
    
  </div>
</template>

<style lang="scss">
.nav-all{
  border-right: 0;
  z-index: 100;
}
.header-nav{
  position: relative;
}
.nav-selection {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: .5rem;
}
.logo{
    height: 35px;
  }
@media (min-width: 768px) {
  .header-nav{
    position: fixed;
  }
  .nav-selection {
    padding: 0;
    display: block;
    top: 60px;
    width: auto;
    justify-content: start;
  }
  .nav-item {
    line-height: 50px;
    height: 50px;
    // width: 130px;
    &:hover {
      background-color: rgb(220,220,220);
    }
  }
  .nav-all{
    z-index: 0;
  }
}
</style>
