import AdminDashboard from './AdminDashboard';
import { loginAdmin, logoutAdmin } from './actions';
import { isAdminAuthenticated } from './auth';

interface AdminPageProps {
    searchParams?: Promise<{
        error?: string;
    }>;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
    const authenticated = await isAdminAuthenticated();
    const params = await searchParams;

    if (!authenticated) {
        return (
            <div className="min-h-screen bg-paper px-6 py-10">
                <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-md place-items-center">
                    <div className="w-full rounded-3xl border border-line bg-white p-8 shadow-sm">
                        <p className="text-sm font-semibold text-green-600">GIDEON ADMIN</p>
                        <h1 className="mt-2 text-3xl font-bold text-ink-900">관리자 로그인</h1>
                        <p className="mt-3 text-sm leading-6 text-ink-500">
                            관리자 페이지에 접속하려면 비밀번호를 입력해 주세요.
                        </p>

                        <form action={loginAdmin} className="mt-8 grid gap-4">
                            <label className="grid gap-2 text-sm font-bold text-ink-900">
                                비밀번호
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="비밀번호 입력"
                                    className="rounded-2xl border border-line px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-green-600"
                                />
                            </label>

                            {params?.error === '1' && (
                                <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                                    비밀번호가 올바르지 않습니다.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-900"
                            >
                                관리자 페이지 입장
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-paper py-8">
            <div className="mx-auto flex max-w-7xl justify-end px-6">
                <form action={logoutAdmin}>
                    <button
                        type="submit"
                        className="rounded-full border border-line bg-white px-5 py-2 text-sm font-bold text-ink-500 transition-colors hover:border-green-600 hover:text-green-600"
                    >
                        로그아웃
                    </button>
                </form>
            </div>
            <AdminDashboard />
        </div>
    );
}
