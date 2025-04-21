<script setup lang="ts"></script>

<template>
    <div :class="s.container">
        <slot />
    </div>
</template>

<style lang="scss" module="s">
.container {
    width: calc(100% - 140px);
    max-width: 1690px;
    margin: 0 auto;
    padding: 0 20px;
}
</style>
