<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import { InputField } from '@/shared/ui/form-fields/input-field'
import { SelectField } from '@/shared/ui/form-fields/select-field'
import { CheckboxField } from '@/shared/ui/form-fields/checkbox-field'
import { TextareaField } from '@/shared/ui/form-fields/textarea-field'
import { BaseButton } from '@/shared/ui/base-button'
import type { FormField, FormState, FormFieldState, FormFields } from '../types'

interface Props {
    state: FormState
    defaultState: FormState | null
    fields: FormFields
}

const props = defineProps<Props>()

const localState = ref({ ...props.state })

const formFields = computed(() => props.fields)

const fieldComponentsMap = {
    input: InputField,
    select: SelectField,
    checkbox: CheckboxField,
    textarea: TextareaField
}

const updateFieldValueHandler = (
    name: FormField['name'],
    newValue: FormFieldState
) => {
    localState.value[name as keyof typeof localState.value] = newValue
    emit('update:state', localState.value)
}

const formSubmitHandler = (e: Event) => {
    e.preventDefault()
    emit('submit', props.state)
}

const formCancelHandler = () => {
    if (props.defaultState !== null) {
        resetState()
    }
    emit('cancel')
}

const resetState = () => {
    if (!props.defaultState) return
    emit('update:state', props.defaultState)
}

const emit = defineEmits<{
    (e: 'update:state', value: FormState): void
    (e: 'submit', value: FormState): void
    (e: 'cancel'): void
    (e: 'init', value: FormState): void
}>()

watchEffect(() => {
    localState.value = { ...props.state }
})
onMounted(() => {
    emit('init', { ...localState.value })
})
</script>

<template>
    <form :class="s.form" @submit="formSubmitHandler">
        <slot
            v-for="field in formFields"
            :key="field.name"
            :name="field.name"
            :data="{ Component: fieldComponentsMap[field.type], field }"
            :update-field-value="updateFieldValueHandler"
        >
            <component
                :is="fieldComponentsMap[field.type]"
                v-bind="field"
                :class="s.formField"
                :model-value="props.state[field.name]"
                @update:model-value="
                    updateFieldValueHandler(field.name, $event)
                "
            />
        </slot>
        <div :class="s.buttonsInner">
            <slot name="buttons">
                <BaseButton :class="[s.button, s.submitBtn]" style-type="green">
                    Submit
                </BaseButton>
                <BaseButton
                    :class="[s.button, s.cancelBtn]"
                    style-type="red"
                    @click="formCancelHandler"
                >
                    Cancel
                </BaseButton>
            </slot>
        </div>
    </form>
</template>

<style lang="scss" module="s">
.form {
}
.formField {
    &:nth-child(n + 2) {
        margin-top: 20px;
    }
}
.formFields {
    margin-top: 30px;
    &:first-child {
        margin-top: 0;
    }
}
.buttonsInner {
    display: flex;
    align-items: center;
    margin-top: 40px;
}
.button {
    &:nth-child(n + 2) {
        margin-left: 20px;
    }
}
</style>
