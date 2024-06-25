import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: any, value: any, option: any) => {
	return cookies.set(name, value, { ...option });
};

/*
export const getCookie = (name: any) => {
	return cookies.get(name);
};*/

export const getCookie = (name: string): string | null => {
	console.log(document.cookie);
	const value = `; ${document.cookie}`;
	console.log(value);
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
	return null;
};

export const removeCookie = (name: any, option: any) => {
	return cookies.remove(name, { ...option });
};
