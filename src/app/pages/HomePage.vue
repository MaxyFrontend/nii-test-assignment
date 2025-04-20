<script setup lang="ts">
import { useStore } from '@/app/store'

const store = useStore()
</script>

<template>
    <div>
        <h1>This is an home page</h1>
        {{ store.state.count }}
        <button @click="store.commit('setCount', 5)">increase</button>
    </div>
</template>
