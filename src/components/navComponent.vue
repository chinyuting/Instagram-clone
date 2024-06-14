<script setup>
import { ref } from 'vue'
import addPostModalComponent from '../components/addPostModalComponent.vue'

// 定義addPostModal
const addPostModal = ref(null)
/**
   ＊ 由addPostModal開放的showModal開啟addPostModal
  */
const openModal = function () {
  addPostModal.value.showModal()
}
</script>

<template>
  <nav class="col-md-1 col-lg-2 nav-all p-md-3 overflow-hidden position-relative">
    <div class="position-relative width-inherit">
      <div class="navbar navbar-light header-nav width-inherit start-0">
        <img
          src="@/assets/images/Instagram_logo_light.png"
          alt=""
          class="header-logo d-md-none d-lg-block d-sm-block ms-md-3"
        />
        <svg
          aria-label="Instagram"
          class="d-none d-lg-none d-md-block header-logo header-logo-icon"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Instagram</title>
          <path
            d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"
          ></path>
        </svg>
      </div>
    </div>

    <div
      class="bg-body d-flex flex-md-column position-fixed nav-selection bottom-0 start-0 justify-content-evenly justify-content-md-start width-inherit"
    >
      <div class="nav-item rounded px-2 mx-md-3">
        <RouterLink
          to="/"
          class="text-decoration-none text-secondary d-flex text-dark justify-content-md-center justify-content-lg-start"
        >
          <div><i class="bi bi-house-door icon-size m-0"></i></div>
          <div class="position-absolute ms-4"><span class="d-none d-lg-inline p-2">首頁</span></div>
        </RouterLink>
      </div>

      <div class="nav-item rounded px-2 mx-md-3">
        <a
          href="#"
          class="text-decoration-none text-secondary d-flex text-dark justify-content-md-center justify-content-lg-start"
          @click.prevent="openModal"
        >
          <div><i class="bi bi-plus-square icon-size m-0"></i></div>
          <div class="position-absolute ms-4"><span class="d-none d-lg-inline p-2">建立</span></div>
        </a>
      </div>

      <div class="nav-item rounded px-2 mx-md-3">
        <RouterLink
          to="/profile"
          class="text-decoration-none text-secondary d-flex text-dark justify-content-md-center justify-content-lg-start"
        >
          <div><i class="bi bi-person-circle icon-size m-0"></i></div>
          <div class="position-absolute ms-4">
            <span class="d-none d-lg-inline p-2">個人檔案</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </nav>
  <addPostModalComponent ref="addPostModal" />
</template>

<style lang="scss">
.nav-all {
  z-index: 100;
}
.width-inherit {
  width: inherit;
}
.header-nav {
  position: relative;
}
.header-logo {
  height: 35px;
}

.nav-selection {
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}

.nav-icon-size {
  font-size: 24px;
}

@media (min-width: 768px) {
  .header-nav {
    position: fixed;
  }
  .nav-selection {
    padding: 0;
    top: 80px;
  }
  i {
    transition: all 0.2s ease-in-out;
    margin-right: 5px;
    font-size: 20px;
  }
  .header-logo-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  .nav-item {
    line-height: 50px;
    height: 50px;
    transition: all 0.2s ease-in-out;
    transform-origin: center;
    &:hover {
      color: rgb(0, 0, 0);
      background-color: rgb(220, 220, 220);
    }
    &:hover i {
      font-size: 22px;
    }
  }
  .nav-all {
    z-index: 0;
  }
}
</style>
