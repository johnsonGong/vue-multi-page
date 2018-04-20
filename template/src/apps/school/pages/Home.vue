<template lang="html">
  <div class="">
      <p>This is School Home Page!</p>
      <p></p>
      <img src="/static/imagesSchool/02_school.png" alt="">
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
        console.log('This is School Home Page!')
    }
}
</script>

<style lang="css">
</style>
