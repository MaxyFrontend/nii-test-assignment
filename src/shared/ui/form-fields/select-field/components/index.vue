<script setup lang="ts">
import { FieldLabel } from '../../field-label'
import type { BaseProps } from '../../types/props'
import type { Options } from '../types/select'

type Props = BaseProps & {
    options: Options
    defaultValue?: string
    selectClass?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const getDefaultSelectedOption = () => {
    return props.options.find((option) => option.default) || null
}

const defaultOption = getDefaultSelectedOption()

if (defaultOption) {
    emit('update:modelValue', defaultOption.value)
} else if (props.defaultValue === props.modelValue && props.modelValue !== '') {
    emit('update:modelValue', props.modelValue)
}
</script>

<template>
    <div :class="s.field">
        <FieldLabel :class="s.label">
            {{ props.label }}
        </FieldLabel>
        <select
            :class="[s.select, [props.selectClass]]"
            v-bind="props.attributes"
            :value="props.modelValue"
            @change="
                emit(
                    'update:modelValue',
                    ($event.target as HTMLSelectElement).value
                )
            "
        >
            <option
                v-for="option in props.options"
                :key="option.value"
                :value="option.value"
                :selected="option.default"
            >
                {{ option.label || option.value }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" module="s">
.field {
    width: 100%;
}
.label {
    margin-bottom: 20px;
}
.select {
    width: 100%;
    display: block;
    padding: 10px 18px;
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    color: #404040;
}
</style>
