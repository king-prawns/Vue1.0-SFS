<template>
    <div id="posts">
        <div class="panel panel-default" v-for="post in posts">
            <div class="panel-heading">
                {{post.title}}
            </div>
            <div class="panel-body">
                <p>{{post.body}}</p>
                <button type="button" v-link="{ name: 'userDetails', params: { id: post.userId}}">{{ $t("message.GO_TO_USER") }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import services from '../service'

export default {
    data(){
        return {
            posts: []
        }
    },
    route: {
        data ({ to }){
            return services.fetchPosts()
            .then((posts)=> {
                document.title = 'Posts'
                return {
                    posts
                }
            })
        }
    }
}
</script>


<style lang="scss" scoped>

</style>