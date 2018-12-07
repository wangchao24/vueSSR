<template>
    <div>
        <p>this is homePage</p>
        <p>{{info}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    serverRequest(store) {
        return store.dispatch("getHomeInfo")
    },
    mounted() {
    },
    computed: {
        info() {
            console.log(this.$store.state.homeInfo);
            return this.$store.state.homeInfo
        }
    }
}  
</script>

