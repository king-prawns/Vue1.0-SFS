<template>
    <div>
        <table class="table">
            <tr>
                <th>{{ $t("message.ID") }}</th>
                <th>{{ $t("message.NAME") }}</th>
                <th>{{ $t("message.EMAIL") }}</th>
            </tr>
            <template v-for="user in users" track-by="id">
                <!--<tr v-on:click="goToDetails(user.id)">-->
                <tr class="userRow" v-link="{ name: 'userDetails', params: {id: user.id}}">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
import services from '../service';
//import Router from 'vue-router'

export default {
    data(){
        return {
            users: []
        }
    },
//    methods: {
//        goToDetails(userID){
//            var router = new Router()
//            router.go('/user/'+userID)
//        } 
//    },
    route: {
        data ({ to }) {
            return services.fetchUsers()
                .then((users) => {
                document.title = 'User List';
                return {
                    users
                }
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.userRow {
    cursor: pointer;
}
</style>