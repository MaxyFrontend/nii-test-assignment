<script setup lang="ts">
import { FormGenerator } from '@/modules/form-generator'
import type { FormState } from '@/modules/form-generator/types'
import { computed } from 'vue'
import { SectionContainer } from '@/shared/ui/section-container'
import { FormTitle } from '@/shared/ui/form-title'
import { useStore } from '@/app/store'

const store = useStore()

const fields = computed(() => store.state.secondaryFormFields)

const secondaryFormState = computed(() => store.state.secondaryFormState)
const secondaryFormDefaultState = computed(
    () => store.state.secondaryFormDefaultState
)

const onStateUpdated = (newState: FormState) => {
    store.commit('setSecondaryFormState', newState)
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
    if (!store.state.secondaryFormDefaultState) {
        store.commit('setSecondaryFormDefaultState', formState)
    }
}
</script>

<template>
    <section :class="s.section">
        <SectionContainer>
            <FormTitle>Secondary Form</FormTitle>
            <FormGenerator
                :state="secondaryFormState"
                :default-state="secondaryFormDefaultState"
                :class="s.form"
                :fields="fields"
                @update:state="onStateUpdated"
                @submit="formSubmitHandler"
                @cancel="formCancelHandler"
                @init="formInitHandler"
            >
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
</style>
