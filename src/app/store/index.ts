import type { InjectionKey } from 'vue'
import { createStore, useStore as useStoreBase } from 'vuex'
import { mutations } from './mutations'
import type { Store } from './types'

export const key: InjectionKey<Store> = Symbol()

export const store: Store = createStore({
    state: {
        mainFormState: {
            name: '',
            acceptTerms: '',
            age: '',
            description: ''
        },
        mainFormDefaultState: null,
        mainFormFields: [
            {
                label: 'name',
                name: 'name',
                type: 'input',
                attributes: {
                    required: true,
                    name: 'name'
                }
            },
            {
                label: 'age',
                name: 'age',
                type: 'select',
                options: [
                    {
                        label: 'below 20',
                        value: 'below-20'
                    },
                    {
                        label: 'from 20 to 40',
                        value: 'from-20-to-40',
                        default: true
                    },
                    {
                        label: 'more than 40',
                        value: 'more-than-40'
                    }
                ],
                attributes: {
                    required: true,
                    name: 'age'
                }
            },
            {
                label: 'description',
                name: 'description',
                type: 'textarea',
                attributes: {
                    name: 'description'
                }
            },
            {
                label: 'agreed with terms',
                name: 'acceptTerms',
                type: 'checkbox',
                trueValue: 'accepted',
                falseValue: 'not-accepted',
                checked: true,
                attributes: {
                    required: true,
                    name: 'accept-terms'
                }
            }
        ],
        secondaryFormState: {
            email: '',
            phone: ''
        },
        secondaryFormDefaultState: null,
        secondaryFormFields: [
            {
                label: 'email',
                name: 'email',
                type: 'input',
                attributes: {
                    required: true,
                    name: 'email',
                    type: 'email'
                }
            },
            {
                label: 'phone',
                name: 'phone',
                type: 'input',
                attributes: {
                    required: true,
                    name: 'phone',
                    type: 'tel'
                }
            }
        ]
    },
    mutations
})

export function useStore(): Store {
    return useStoreBase(key) as Store
}
