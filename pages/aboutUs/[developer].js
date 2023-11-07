import React from 'react';
import { useRouter } from 'next/router';

const developer = () => {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

  const router = useRouter();
  const developer_id = parseInt(router.query.developer); // Convert to a number

  // Find the developer with the matching ID
  const req_developer = details.find((dev) => dev.id === developer_id);
console.log(req_developer)
  if (!req_developer) {
    return <p>Developer not found</p>;
  }

  return (
    <div>
      <p>{req_developer.id}</p>
      <p>{req_developer.name}</p>
      <p>{req_developer.role}</p>
    </div>
  );
};

export default developer;
