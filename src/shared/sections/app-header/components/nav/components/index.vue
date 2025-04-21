<script setup lang="ts">
import type { List } from '../types'

interface Props {
    list: List
}
const props = defineProps<Props>()
</script>

<template>
    <div :class="s.nav">
        <ul :class="s.list">
            <li v-for="item in props.list" :key="item.name" :class="s.listItem">
                <router-link :to="item.to">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" module="s">
.nav {
    width: fit-content;
}
.list {
    display: flex;
    align-items: center;
}
.listItem {
    color: #fff;
    &:nth-child(n + 2) {
        margin-left: 40px;
    }
    &:hover {
        text-decoration: underline;
    }
}
</style>
