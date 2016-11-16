<template>
  <div>
    <my-header></my-header>
    <topnav></topnav>
    <!-- main view -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
            <router-view
              class="view"
              keep-alive
              transition
              transition-mode="out-in">
            </router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Topnav from './components/Topnav';
import MyHeader from './components/MyHeader';
    
export default {
    components: {
        Topnav,
        MyHeader
    }
}
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "~bootstrap/dist/css/bootstrap.css";

.container-fluid {
    .view {
        transition: opacity .2s ease;
        &.v-enter, &.v-leave {
            opacity: 0;
        }
    }
}

.top-right {
    position: absolute;
    top: 10px;
    right: 15px;
}
.active {
    font-weight: bold;
}
</style>
