<script setup lang="ts">
import { SectionContainer } from '@/shared/ui/section-container'
import { HeaderNav } from './nav'
import type { List } from './nav/types'

const navItemsList: List = [
    {
        name: 'Home',
        to: { name: 'home' }
    },
    {
        name: 'About',
        to: { name: 'about' }
    }
]
</script>

<template>
    <header :class="s.header">
        <SectionContainer>
            <HeaderNav :class="s.headerNav" :list="navItemsList" />
        </SectionContainer>
    </header>
</template>

<style lang="scss" module="s">
.header {
    padding: 20px 0;
    background: #ccc;
}
.headerNav {
    margin-left: auto;
}
</style>
