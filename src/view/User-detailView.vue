<template>
    <div id="userDetails">
        <button type="button" class="btn btn-success top-right" v-link="{ name: 'userTodos', params: {id: userID}}">{{ $t("message.SHOW_TODOS")}}</button>
        <h4>{{ $t("message.USER_DETAIL") }}</h4>
        <form>
            <div class="form-group">
                <label for="name">{{ $t("message.NAME") }}</label>
                <input id="name" type="text" class="form-control" v-model="user.name" name="name">
            </div>
            <div class="form-group">
                <label for="email">{{ $t("message.EMAIL") }}</label>
                <div class="input-group">
                    <span class="input-group-addon">@</span>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
            </div>
            <div class="form-group">
                <label for="username">{{ $t("message.USERNAME") }}</label>
                <input type="text" class="form-control" v-model="user.username">
            </div>
            <div class="form-group">
                <label for="phone">{{ $t("message.PHONE") }}</label>
                <input type="text" class="form-control" v-model="user.phone">
            </div>
            <button type="button" class="btn btn-primary" v-on:click="updateUser()">{{ $t("message.UPDATE_USER") }}</button>
            <button type="button" class="btn btn-info" v-on:click="sayName(user.name, user.username)">{{ $t("message.SAY_NAME") }}</button>
        </form>
    </div>
</template>


<script>
import services from '../service'
import SteWidget from '../widget/SteWidget'
    
export default {
    data(){
        return {
            user: {},
            userID: '' //avrei potuto utilizzare user.id senza dichiarare userID
        }
    },
    methods: {
        updateUser(){
            return services.updateUser(this.userID, this.user)
        },
        sayName(firstName, lastName) {
            SteWidget.fullName(firstName, lastName)
        }
    },
    route: {
        data ({ to }){
            return services.fetchUser(to.params.id)
            .then((user) => {
                document.title = 'User Detail'
                return {
                    user,
                    userID: to.params.id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#userDetails {
    padding-top: 10px;
}
</style>