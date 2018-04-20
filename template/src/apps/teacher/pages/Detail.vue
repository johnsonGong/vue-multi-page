<template lang="html">
  <div class="">
      <p>This is 教师端 Detail Page!</p>
      <p></p>
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
        console.log('%cThis is 教师端 detail Page!', 'background-color: #ffee58')
    }
}
</script>

<style lang="css">
</style>
