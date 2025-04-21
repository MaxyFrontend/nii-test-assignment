<script setup lang="ts">
import { FieldLabel } from '../../field-label'
import type { BaseProps } from '../../types/props'

type Props = BaseProps & {
    type?: 'text' | 'tel' | 'email'
    inputClass?: string
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    inputClass: ''
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
emit('update:modelValue', props.modelValue)
</script>

<template>
    <div :class="s.field">
        <FieldLabel :class="s.label">
            {{ props.label }}
        </FieldLabel>
        <input
            :class="[s.input, [props.inputClass]]"
            v-bind="props.attributes"
            :type="props.type"
            :value="props.modelValue"
            @input="
                emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value
                )
            "
        />
    </div>
</template>

<style lang="scss" module="s">
.field {
    width: 100%;
}
.label {
    margin-bottom: 20px;
}
.input {
    padding: 10px 18px;
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    color: #404040;
    transition:
        border,
        color,
        0.2s ease;
    &.invalid {
        border-color: rgb(191, 13, 13);
        color: rgb(191, 13, 13);
    }
    display: block;
    width: 100%;
    font-size: 18px;
    line-height: 1.2;
    color: inherit;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #f2f2f2 inset !important;
    }
    &::placeholder {
        color: inherit;
    }
}
</style>
