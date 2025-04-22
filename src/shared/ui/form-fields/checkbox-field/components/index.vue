<script setup lang="ts">
import { FieldLabel } from '../../field-label'
import type { BaseProps } from '../../types/props'

type Props = BaseProps & {
    trueValue: string
    falseValue: string
    type?: 'checkbox'
    checked?: boolean
    labelClass?: ''
    elementClass?: string
}

const props = withDefaults(defineProps<Props>(), {
    type: 'checkbox',
    elementClass: undefined,
    labelClass: undefined
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

if (
    (props.trueValue === props.modelValue || props.checked) &&
    props.falseValue !== props.modelValue
) {
    emit('update:modelValue', props.trueValue)
} else {
    emit('update:modelValue', props.falseValue)
}
</script>

<template>
    <label :class="s.field">
        <input
            :class="[s.checkbox, [props.elementClass]]"
            v-bind="props.attributes"
            :type="props.type"
            :checked="props.trueValue === props.modelValue"
            @change="
                emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).checked
                        ? props.trueValue
                        : props.falseValue
                )
            "
        />
        <FieldLabel :class="[s.label, [props.labelClass]]">
            {{ props.label }}
        </FieldLabel>
    </label>
</template>

<style lang="scss" module="s">
.field {
    width: 100%;
    display: flex;
}
.checkbox {
    margin-right: 20px;
}
</style>
