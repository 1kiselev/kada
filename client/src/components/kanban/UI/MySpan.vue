<template>
  <div class="my-span">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-span'

}
</script>

<style>
.my-span{
  width: 102px;
  height: 49px;
  margin-top: 11px;
  margin-left: 11px;
  font-size: 20px;
  transition: 0.4s;
  color: white;
}

</style>