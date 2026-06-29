'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ADMIN_COOKIE_NAME, getAdminAuthToken } from './auth';

const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 8;

export const loginAdmin = async (formData: FormData) => {
    const password = String(formData.get('password') ?? '');

    if (password !== 'admingidon12!@') {
        redirect('/admin?error=1');
    }

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, getAdminAuthToken(), {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/admin',
        maxAge: ADMIN_COOKIE_MAX_AGE,
    });

    redirect('/admin');
};

export const logoutAdmin = async () => {
    const cookieStore = await cookies();
    cookieStore.delete(ADMIN_COOKIE_NAME);

    redirect('/admin');
};
