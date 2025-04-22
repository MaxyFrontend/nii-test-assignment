<script setup lang="ts">
import { FormGenerator } from '@/modules/form-generator'
import type { FormState } from '@/modules/form-generator/types'
import { computed } from 'vue'
import { SectionContainer } from '@/shared/ui/section-container'
import { FormTitle } from '@/shared/ui/form-title'
import { useStore } from '@/app/store'

const store = useStore()

const fields = computed(() => store.state.mainFormFields)

const mainFormState = computed(() => store.state.mainFormState)

const mainFormDefaultState = computed(() => store.state.mainFormDefaultState)

const onStateUpdated = (newState: FormState) => {
    store.commit('setMainFormState', newState)
}

const formSubmitHandler = (formState: FormState) => {
    alert(
        `form Submitted\n
        ${JSON.stringify(formState)}`
    )
}

const formCancelHandler = () => {
    alert('form Cancelted')
}
const formInitHandler = (formState: FormState) => {
    if (!store.state.mainFormDefaultState) {
        store.commit('setMainFormDefaultState', formState)
    }
}
</script>

<template>
    <section :class="s.section">
        <SectionContainer>
            <FormTitle>Main Form</FormTitle>
            <FormGenerator
                :state="mainFormState"
                :default-state="mainFormDefaultState"
                :class="s.form"
                :fields="fields"
                @update:state="onStateUpdated"
                @submit="formSubmitHandler"
                @cancel="formCancelHandler"
                @init="formInitHandler"
            >
                <template #description="{ data, updateFieldValue }">
                    <component
                        :is="data.Component"
                        :class="[s.textareaField]"
                        :model-value="mainFormState.description"
                        v-bind="data.field"
                        :element-class="s.textarea"
                        :label-class="s.textareaFieldLabel"
                        @update:model-value="
                            updateFieldValue(data.field.name, $event)
                        "
                    />
                </template>
            </FormGenerator>
        </SectionContainer>
    </section>
</template>

<style lang="scss" module="s">
.section {
    padding: 40px 0;
}
.form {
    margin: 0 auto;
    width: 100%;
    max-width: 550px;
}
.textareaField {
    margin-top: 60px;
}
.textarea {
    border-color: rgb(121, 91, 193);
}
.textareaFieldLabel {
    color: rgb(82, 10, 115);
}
</style>
