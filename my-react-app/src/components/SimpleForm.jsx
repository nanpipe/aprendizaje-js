import { useForm } from 'react-hook-form';

function SimpleForm() {


    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
        /*{
        defaultValues: {
            name: 'Juan',
            email: 'juan@example.com',
            age: 34
    }}*/
    );
    const password = watch('password');

    const getPasswordStrength = () => {
        if (!password) return '';
        if (password.length < 8) return 'Weak 😟';
        if (password.length < 12) return 'Medium 😐';
        return 'Strong 💪';
    };

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Enter your name"
                {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 3, message: 'Must be at least 3 characters' },
                    maxLength: { value: 50, message: 'Must be at less than 50 characters' }
                })} />
            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            <input placeholder="your.email@example.com" {...register('email',
                {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Wrong email format' }
                })} />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            <input type="number" placeholder="18+" {...register('age', {
                required: 'Age is mandatory',
                min: { value: 18, message: 'Must be at least 18' },
                pattern: { value: /^\d*$/, message: 'Must be a number' }
            }
            )} />
            {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}

            <input
                type="password"
                placeholder="Enter password"
                {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Password must be at least 8 characters' },
                    pattern: { value: /.*\d.*/, message: 'Password must contain at least one number' }
                })}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            {password && <p style={{ color: 'blue' }}>Strength: {getPasswordStrength()}</p>}
            <input
                type="password"
                placeholder="enter password"
                {...register('confirmPassword', {
                    required: 'Please confirm password',
                    validate: value => value === password || 'Passwords do not match'
                })}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default SimpleForm;