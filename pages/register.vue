<template>
    <NuxtLayout name="auth">
        <h1 class="font-semibold mt-0 mb-2">
            Register an account
        </h1>
        <h2 class="text-base font-normal mt-0 mb-4">
            Already have an account? <NuxtLink to="/login" class="text-primary">Log in</NuxtLink> instead.
        </h2>
        <form action="" class="card" @submit="onSubmit">
            <SawmInput
                id="email"
                v-model="state.email"
                label="Email"
                type="text"
                :error="v$.email.$error"
                :error-message="v$.email.$errors[0]?.$message"
            />
            <SawmInput
                id="password"
                v-model="state.password"
                label="Password"
                type="password"
            />
            <SawmInput
                id="passwordConfirmation"
                v-model="state.passwordConfirmation"
                label="Confirm password"
                type="password"
            />
            <div class="field">
                <Button
                    label="Register"
                    :disabled="submitting"
                    icon="pi pi-user"
                    type="submit"
                    class="w-full mt-4"
                />
            </div>
        </form>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import { email, required, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const state = reactive({
    email: '',
    password: '',
    passwordConfirmation: '',
});

const rules = computed(() => ({
    email: { required, email },
    password: { required },
    passwordConfirmation: { required, sameAs: sameAs(state.password) },
}));

const v$ = useVuelidate(rules, state);

const submitting = ref(false);

const onSubmit = async (e) => {
    e.preventDefault();

    v$.value.$touch();
    if (v$.value.$errors) {
        return;
    }

    const { register } = useAuth();
    submitting.value = true;
    try {
        await register(state.email, state.password);
    } catch (e) {
        console.error(e);
    }
    submitting.value = false;
};
</script>
