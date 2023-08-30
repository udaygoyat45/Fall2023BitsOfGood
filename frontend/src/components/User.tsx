// src/components/User.tsx
import React from 'react';

interface UserProps {
  name: string;
  profilePicture: string;
  phone: string;
  email: string;
  rating: number;
  status: boolean;
  heroProject: string;
}

const User: React.FC<UserProps> = ({
  name,
  profilePicture,
  phone,
  email,
  rating,
  status,
  heroProject,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <img src={profilePicture} alt={name} />
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{rating}</td>
      <td>{status ? 'Active' : 'Inactive'}</td>
      <td>{heroProject}</td>
    </tr>
  );
};

export default User;
