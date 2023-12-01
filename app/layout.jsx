import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata = {
  title: "スポカレ｜スポーツ日程更新中",
  description:
    "スポーツの試合日程、TV放送、ネット配信予定、チケット情報まとめ。地上波、BS、CSの放映スケジュール、DAZN、AbemaTVなどのOTTサービスでのライブ予定、ぴあ、ローチケ、LINEチケットなどのチケット発売日を網羅。HUBでの放映やスタジアム・アリーナ情報も。",
  ogTitle: "スポカレ スポーツ日程更新中",
  ogType: "website",
  ogUrl: "https://spocale.com/",
  ogImage:
    "https://s3-ap-northeast-1.amazonaws.com/assets.spocale.com/assets/og_image-f1a7eed168b111fe4957125680b6d5b554062c9451964998e923e6360cf48200.jpg",
  ogImageHeight: 630,
  ogImageWidth: 1200,
  ogDescription:
    "スポーツの試合日程、TV放送、ネット配信予定、チケット情報まとめ。地上波、BS、CSの放映スケジュール、DAZN、AbemaTVなどのOTTサービスでのライブ予定、ぴあ、ローチケ、LINEチケットなどのチケット発売日を網羅。HUBでの放映やスタジアム・アリーナ情報も。",
  ogLocale: "ja_JP",
  twitterCard: "summary_large_image",
  twitterSite: "@spocale_jp",
  twitterTitle: "スポカレ スポーツ日程更新中",
  twitterImage: "https://spocale.com/tw_image.jpg",
  twitterUrl: "https://spocale.com/",
  twitterDescription:
    "スポーツの試合日程、TV放送、ネット配信予定、チケット情報まとめ。地上波、BS、CSの放映スケジュール、DAZN、AbemaTVなどのOTTサービスでのライブ予定、ぴあ、ローチケ、LINEチケットなどのチケット発売日を網羅。HUBでの放映やスタジアム・アリーナ情報も。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body>
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
