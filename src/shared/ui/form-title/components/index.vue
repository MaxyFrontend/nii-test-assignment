<script setup lang="ts"></script>

<template>
    <h3 :class="s.title">
        <slot />
    </h3>
</template>

<style lang="scss" module="s">
.title {
    font-size: 32px;
    line-height: 1.3;
    text-align: center;
}
</style>
