<script setup lang="ts">
import { AppHeader } from '@/shared/sections/app-header'
</script>

<template>
    <div :class="s.layout">
        <AppHeader />
        <main :class="s.main">
            <slot />
        </main>
    </div>
</template>

<style lang="scss" module="s">
.layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    overflow: hidden;
}
.main {
    position: relative;
    flex-grow: 1;
}
</style>
