export default function () {
    const { $supabase } = useNuxtApp();
    const user = useState('user');
    const session = useState('session');

    const register = async (email: string, password: string) => {
        const response = await $supabase.auth.signUp({ email, password });

        if (response.error) {
            throw response.error;
        }

        user.value = response.user;
        session.value = response.session;
    };

    return {
        user,
        session,
        register,
    };
}
