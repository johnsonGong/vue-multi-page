<template lang="html">
  <div class="">
      <p>This is School Detail Page!</p>
      <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    data () {
        return {
            msg: '成都'
        }
    },
    created: function () {
        console.log('%cThis is School Home Page!', 'background-color: #ffee58')
    }
}
</script>

<style lang="css">
</style>
