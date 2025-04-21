import type { RouteLocationRaw } from 'vue-router'

export type ListItem = {
    name: string
    to: RouteLocationRaw
}

export type List = ListItem[]
