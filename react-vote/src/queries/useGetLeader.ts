import { useQuery } from '@tanstack/react-query';
import { userAPI } from '../api/request';
import { useNavigate } from 'react-router-dom';

// 리더를 가져오는 훅
export const useGetLeaders = (partName: string) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: [partName, 'Leaders'],
    queryFn: async () => {
      const res = await userAPI.getLeaders(partName);
      if (res.status === 400) {
        navigate('/login');
        alert('접근오류! 로그인하세요');
      }
      return res.data;
    },
  });

  return {
    leaders: data || null,
    isLoading,
    error,
  };
};
