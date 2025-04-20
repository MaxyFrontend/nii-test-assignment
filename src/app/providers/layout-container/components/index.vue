<script setup lang="ts">
import { computed } from 'vue'
import type { DefineComponent } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/app/layouts/default.vue'

type LayoutModule = {
    default: DefineComponent<any>
}

type Layouts = Record<string, LayoutModule>

const layouts: Layouts = import.meta.glob('@/app/layouts/*.vue', {
    eager: true
})
const route = useRoute()
const layoutComponent = computed(() => {
    for (const key in layouts) {
        if (
            key.split('/').slice(-1)[0] ===
            (route.meta.layout || 'default') + '.vue'
        ) {
            return layouts[key as keyof typeof layouts].default || DefaultLayout
        }
    }
    return DefaultLayout
})
</script>

<template>
    <component :is="layoutComponent">
        <slot />
    </component>
</template>

<style lang="scss"></style>
