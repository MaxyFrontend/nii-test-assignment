<script setup lang="ts"></script>

<template>
    <p :class="s.label">
        <slot />
    </p>
</template>

<style lang="scss" module="s">
.label {
}
</style>
