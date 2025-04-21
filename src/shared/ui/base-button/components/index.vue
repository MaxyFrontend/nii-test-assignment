<script setup lang="ts">
interface Props {
    styleType?: 'red' | 'green' | 'default'
}
const props = withDefaults(defineProps<Props>(), {
    styleType: 'default'
})
</script>

<template>
    <button :class="[s.button, [s[props.styleType]]]">
        <slot />
    </button>
</template>

<style lang="scss" module="s">
.button {
    font-size: 18px;
    line-height: 1;
    padding: 8px 12px;
    &.default {
        background: #848484;
        color: #fafafa;
    }
    &.red {
        background: #d61d1d;
        color: #fafafa;
    }
    &.green {
        background: #1ed41e;
        color: #fafafa;
    }
}
</style>
