<template>
<div id="todos">
    <button type="button" class="btn btn-success top-right" v-link="{ name: 'userDetails', params: { id: userID}}">{{ $t("message.BACK_TO_USER") }}</button>
    <h4>
        TODO:
        {{todos | nCompletedTodo}}
        /
        {{todos.length}}
    </h4>
    <div v-for="todo in todos" class="checkbox disabled">
        <label>
            <input type="checkbox" v-model="todo.completed" disabled>
            {{todo.title}}
        </label>
    </div>
</div>
</template>

<script>
import services from '../service'
    
export default {
    data(){
        return {
            todos: [],
            userID: ''
        }
    },
    filters: {
        nCompletedTodo(todos){
            var completed = 0
            for(var todo of todos){
                if(todo.completed)
                    completed++
            }
            return completed
        }
    },
    route: {
        data ({ to }){
            return services.fetchUserTodos(to.params.id)
            .then((todos) => {
                document.title = 'User Todos'
                return {
                    todos,
                    userID: to.params.id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#todos {
    padding-top: 10px;
}
</style>