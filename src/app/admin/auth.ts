import { createHash } from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE_NAME = 'gidon_admin_auth';

const ADMIN_PASSWORD = 'admingidon12!@';

export const getAdminAuthToken = () => {
    return createHash('sha256').update(ADMIN_PASSWORD).digest('hex');
};

export const isAdminAuthenticated = async () => {
    const cookieStore = await cookies();
    return cookieStore.get(ADMIN_COOKIE_NAME)?.value === getAdminAuthToken();
};
