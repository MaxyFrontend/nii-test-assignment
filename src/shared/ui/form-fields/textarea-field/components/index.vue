<script setup lang="ts">
import { FieldLabel } from '../../field-label'
import type { BaseProps } from '../../types/props'

type Props = BaseProps & {
    resize?: 'none' | 'both' | 'vertical' | 'horizontal'
    labelClass?: string
    elementClass?: string
}

const props = withDefaults(defineProps<Props>(), {
    resize: 'none',
    elementClass: undefined,
    labelClass: undefined
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

emit('update:modelValue', props.modelValue)
</script>

<template>
    <div :class="s.field">
        <FieldLabel :class="[s.label, [props.labelClass]]">
            {{ props.label }}
        </FieldLabel>
        <textarea
            :class="[s.textarea, [props.elementClass]]"
            v-bind="props.attributes"
            :value="props.modelValue"
            :style="{
                resize: props.resize
            }"
            @input="
                emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value
                )
            "
        ></textarea>
    </div>
</template>

<style lang="scss" module="s">
.field {
    width: 100%;
}
.label {
    margin-bottom: 20px;
}
.textarea {
    display: block;
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    line-height: 1.2;
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    color: #404040;
}
</style>
