<template lang="html">
  <div class="">
      <p>This is 教师端 Home Page!</p>
      <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: '重庆'
        }
    },
    created: function () {
        console.log('This is 教师端 Home Page!')
    }
}
</script>

<style lang="css">
</style>
