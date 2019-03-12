<template>
    <div id="app">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default{
    data(){
        return {
        }
    },
    components:{
        Header,
        Footer,
        Todo
    }
}
</script>

<style lang="stylus" scoped>

</style>