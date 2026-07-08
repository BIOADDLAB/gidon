import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const name = String(formData.get('name') ?? '').trim();
        const phone = String(formData.get('phone') ?? '').trim();
        const message = String(formData.get('message') ?? '').trim();

        if (!name || !phone) {
            return NextResponse.json({ success: false, error: '이름과 연락처를 입력해주세요.' }, { status: 400 });
        }

        const gmailUser = process.env.GMAIL_USER;
        const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
        const contactEmail = process.env.CONTACT_EMAIL;

        if (!gmailUser || !gmailAppPassword || !contactEmail) {
            return NextResponse.json(
                { success: false, error: '메일 전송 환경변수가 설정되지 않았습니다.' },
                { status: 500 },
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailUser,
                pass: gmailAppPassword,
            },
        });

        await transporter.sendMail({
            from: gmailUser,
            to: contactEmail,
            subject: `[문의] ${name}`,
            text: `
성함: ${name}
전화번호: ${phone}
문의내용: ${message || '미입력'}

홈페이지를 통해서 치아 고민 상담 요청이 들어왔습니다.
            `.trim(),
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('메일 전송 실패:', error);
        return NextResponse.json({ success: false, error: '메일 전송에 실패했습니다.' }, { status: 500 });
    }
}
