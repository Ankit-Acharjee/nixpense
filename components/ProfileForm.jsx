'use client'
// components/ProfileForm.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useUser } from '@clerk/nextjs';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  phoneNumber: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email').min(1, 'Required'),
});

const ProfileForm = ({ user }) => {
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { isDirty } = formState;
  const [isEditing, setIsEditing] = useState(false);
  

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (data) => {
    // Update data in the database (replace with your API call)
    console.log('Updated data:', data);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit(handleSaveClick)}>
      <input
        type="text"
        placeholder="Name"
        {...register('name')}
        disabled={!isEditing}
      />
      <input
        type="text"
        placeholder="Phone Number"
        {...register('phoneNumber')}
        disabled={!isEditing}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('email')}
        disabled={!isEditing}
      />
      {isEditing ? (
        <>
          <button type="submit" disabled={!isDirty}>
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </form>
  );
};

export default ProfileForm;
