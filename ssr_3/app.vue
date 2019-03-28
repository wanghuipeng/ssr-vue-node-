<template>
    <div>
        <h3>simple project for vue+node ssr!</h3>
        {{msg}}
         <div>
            <router-link to="/home">home</router-link>
            <router-link to="/list">list</router-link>
            <router-link to="/detail">detail</router-link>

            <router-view></router-view>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"333333333333333"
        }
    }
}
</script>