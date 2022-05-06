<template>
    <div class="field">
        <label :for="id" class="block font-medium">{{ label }}</label>
        <InputText
            :id="id"
            class="w-full"
            :class="{ 'p-invalid': error }"
            v-bind="$attrs"
            :model-value="modelValue"
        />
        <small v-if="error && errorMessage" style="color: var(--sawm-error-red)">{{ errorMessage }}</small>
    </div>
</template>
<script>
export default {
    name: 'SawmInput',
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            default: '',
        },
        error: {
            type: Boolean,
            default: false,
        },
        errorMessage: {
            type: String,
            default: '',
        },
    },
};
</script>
