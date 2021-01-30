<template>
    <div class="title">
        <h2>{{header}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        header:String,
    }
}
</script>
<style lang="scss" scoped>
.title{
    h2{
        text-transform: uppercase;
    }
}
</style>