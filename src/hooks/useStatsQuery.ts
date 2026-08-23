import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchStats, createRegistration } from '../services/api';
import type { AppStats, PlayerRegistration } from '../types';

export const useStatsQuery = () => {
  return useQuery<AppStats, Error>({
    queryKey: ['stats'],
    queryFn: fetchStats,
    refetchInterval: 5000,
    placeholderData: {
      total: 342891,
      left: 131670,
      right: 211221,
      downloads: 312000,
      countries: 142,
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (player: PlayerRegistration) => createRegistration(player),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
};
