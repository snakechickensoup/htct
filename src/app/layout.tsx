import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '한터글로벌 | 프론트엔드 강미정',
  description: '한터글로벌 서비스개발실 프론트엔드 개발자 코딩테스트 - 강미정'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
