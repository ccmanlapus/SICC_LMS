import { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';

import { useStudents } from '@/hooks/redux/useStudents';

const useHooks = () => {
  const { registrations, isLoading } = useStudents();

  const breadcrumbs = [
    {
      href: '#',
      title: 'Students',
      icon: FaUserFriends,
    },
  ];

  const totalPages = 5; // This should be dynamically set based on your API response
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  return {
    totalPages,
    currentPage,
    onPageChange,
    registrations,
    isLoading,
    breadcrumbs,
  };
};

export default useHooks;
