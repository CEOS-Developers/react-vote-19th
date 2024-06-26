import axiosInstance from './index';

// 데이터 인터페이스 정의
export interface LoginData {
	userID: string;
	password: string;
}

export interface JoinData {
	name: string;
	username: string;
	password: string;
	email: string;
	team: string;
	role: string;
	part: string;
}

// Auth 관련 API
export const authAPI = {
	login: async (data: LoginData) => {
		return await axiosInstance.post('/api/v1/auth/login', data);
	},
	logout: async () => {
		return await axiosInstance.post('/api/v1/auth/logout');
	},
	reissue: async (accessToken: string, refreshToken: string) => {
		return await axiosInstance.post('/api/v1/auth/reissue', null, {
			headers: {
				accessToken,
				refreshToken,
			},
		});
	},
};

// User 관련 API
export const userAPI = {
	join: async (data: JoinData) => {
		return await axiosInstance.post('/api/v1/join', data);
	},

	getUserInfo: async () => {
		return await axiosInstance.get('/api/v1/users');
	},


	/*getUserInfo: async (accessToken: string) => {
		return await axiosInstance.get('/api/v1/users', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
	},*/
	voteTeam: async (teamId: number,accessToken: string) => {
		return await axiosInstance.post(`/api/v1/users/votes/teams/${teamId}`,	{
            headers: {
            Authorization: `Bearer ${accessToken}`},
        },)
		
	
	},
	voteLeader: async (leaderId: number) => {
		return await axiosInstance.post(`/api/v1/users/votes/leaders/${leaderId}`);
	},
	getFrontendLeaderResults: async () => {
		return await axiosInstance.get('/api/v1/users/votes/leaders/front');
	},
	getBackendLeaderResults: async () => {
		return await axiosInstance.get('/api/v1/users/votes/leaders/back');
	},
	getFrontendLeaders: async () => {
		return await axiosInstance.get('/api/v1/users/leaders/front');
	},
	getBackendLeaders: async () => {
		return await axiosInstance.get('/api/v1/users/leaders/back');
	},
};

// Team 관련 API
export const teamAPI = {
	getTeams: async () => {
		return await axiosInstance.get('/api/v1/teams');
	},
	getTeamVotes: async () => {
		return await axiosInstance.get('/api/v1/teams/votes');
	},
};
