<script setup lang="ts">
import { LayoutContainer } from '@/app/providers/layout-container'
</script>

<template>
    <LayoutContainer>
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </LayoutContainer>
</template>

<style lang="scss"></style>
