
<template>
  <div class="todo-list">
    
    <h1>todos</h1>
    <section>
      <input type="text" v-model="val" @keydown.enter="add" class="todo-input"/>
    </section>
    
    <template v-if="todos_back.length">
      <ul class="list">
        <li v-for="(todo, i) in todos" :key="i" :class="{'active': todo.completed}">
          <input type="checkbox" v-model="todo.completed" class="checkbox"/>
          <span :class="{ completed: todo.completed }"> {{ todo.val }}</span>
          <span class="close" @click="clearItem(i)">x</span>
        </li>
      </ul>

      <div class="menu">
        <ul>
          <li v-for="(menu) in menuList" :key="menu.id" :class="{'active': activeMenu === menu.id}" @click="clickMenu(menu)">{{menu.name}}</li>
        </ul>
      </div>
    </template>

  </div>
</template>

<script setup>
  import { ref,computed } from "vue"
  const val = ref('')
  const todos = ref([])
  const todos_back = ref([])
  const activeMenu = ref(1)
  const menuList = ref([{
    name: 'All',
    id: 1,
    alias: 'all'
  }, {
    name: 'Active',
    id: 2,
    alias: 'active'
  }, {
    name: 'Completed',
    id: 3,
    alias: 'completed'
  }])

  function add () {
    todos.value.push({val: val.value, completed: false})
    saveTodos()
    clear()
  }

  function clear () {
    val.value = ''
  }

  const all = computed(() => todos.value.length)

  const active = computed(() => todos.value.filter(item => !item.completed).length)

  const allDone = computed({
    get () {
      return active.value === 0
    },
    set (value) {
      todos.value.forEach(item => {
        item.completed === value
      })
      saveTodos()
    }
  })

  function saveTodos () {
    todos_back.value = [...todos.value]
  }

  function clickMenu (item) {
    console.log(activeMenu, item)
    activeMenu.value = item.id
    switch(item.alias) {
      case 'all':
        selectAll()
        break
      case 'active':
        selectActive()
        break
      case 'completed':
        selectCompleted()
        break
    }
  }

  function selectAll () {
    todos.value = todos_back.value
  }

  function selectActive () {
    todos.value = todos_back.value.filter(item => !item.completed)
  }

  function selectCompleted () {
    todos.value = todos_back.value.filter(item => item.completed)
  }

  function clearItem (index) {
    todos.value.splice(index,1)
    saveTodos()
  }


</script>

<style scoped lang="scss">
  ul,li,h1 {
    margin: 0;
    padding: 0;
  }

  input {
    &:focus {
      outline: 0;
    }

    &[type=checkbox] {
      appearance: none;
    }
  }

  .todo-list {
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }


  h1 {
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
  }

  .todo-input {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 16px 16px 16px 60px;
    border: none;
    background: #f5f5f5;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    line-height: 1.4em;
    font-size: 24px;
  }

  li {
    list-style: none;
  }

  .list {
    width: 100%;
    background: #f5f5f5;
    
    >li {
      position: relative;
      display: flex;
      align-items: center;
      padding: 15px 5px 15px 5px;
      border-bottom: 1px solid #ededed;

      .close {
        display: none;
      }

      &.active {
        color: #d9d9d9;
        text-decoration: line-through;
      }

      &:hover,
      &.active {
        .close {
          display: block;
          position: absolute;
          top: 17px;
          right: 12px;
          color: #e98848;
          font-size: 32px;
          cursor: pointer;
        }
      }
    }
    

    .checkbox {
      position: relative;
      appearance: none;
      width: 40px;    
      height: 40px;   
      margin-right: 12px; 
      border: 1px solid #ccc;
      border-radius: 50%;
      cursor: pointer;

      &:checked {
        border-color: #e98848;
    
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: #e98848;
          border-radius: 50%;
        }
      }
    }
  }

  .menu {
    position: relative;
    height: 20px;
    padding: 10px 15px;
    border-top: 1px solid #e6e6e6;
    background: #f5f5f5;
    color: #777;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 
                  0 8px 0 -3px #f6f6f6, 
                  0 9px 1px -3px rgb(0 0 0 / 20%), 
                  0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
    }

    ul {
      position: relative;
      display: flex;
      z-index: 2;
    }

    li {
      padding: 3px 8px;
      margin: 0 5px;
      line-height: 1;
      cursor: pointer;
      border: 1px solid transparent;

      &.active {
        border-color:rgba(175, 47, 47, 0.2);
      }
    }
  }
</style>