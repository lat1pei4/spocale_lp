// NAVIGATION and Hamburger Menu
export const NAV_LINKS = [
  { href: "#hero", key: "top", label: "TOP" },
  { href: "#aboutUs", key: "about us", label: "ABOUT US" },
  { href: "#features", key: "features", label: "FEATURES " },
  { href: "#achievements", key: "achievements", label: "ACHIEVEMENTS" },
  { href: "#reviews", key: "reviews", label: "REVIEWS" },
  { href: "#faq", key: "faqs", label: "FAQs" },
];

// FEATURES SECTION
export const FEATURES = [
  {
    id: 1,
    title: "自分の推しチーム好きなスポーツをMYカレンダーに集めよう！",
    variant: "green",
    description:
      "「コレクション登録」を行うことで、好きなチームや気になる大会の試合観戦情報をMYカレンダーにまとめることができます。",
  },
  {
    id: 2,
    title: "試合情報やチケット発売情報をプッシュ通知でリマインド！",
    variant: "green",
    description:
      "MYカレンダーに登録したカレンダーや試合は、試合開始前やチケット発売日にプッシュ通知でリマインドされます。プッシュ通知のタイミングをカスタマイズすることも可能です。",
  },
  {
    id: 3,
    title: "気になる試合は「みたい登録」でシェア！",
    variant: "orange",
    description:
      "気になる試合のメガホンアイコンをタップすると「みたい登録」が完了し友だちに試合情報をシェアすることができます。友だちと一緒に観戦するきっかけを作りましょう。",
  },
  {
    id: 4,
    title: "公式カレンダーやオリジナル着せ替えぞくぞくコラボ実施中！",
    variant: "green",
    description:
      "スポカレに掲載するカレンダーは、多くのチームや大会に公式カレンダーとして認定されています。MYカレンダーをチーム・リーグ仕様に着せ替えできるオリジナル着せ替えテーマも配信中。",
  },
];

// Features Section - Icons
export const ICONS = [
  {
    src: "/images/feat_logo_01.svg",
  },
  {
    src: "/images/feat_logo_02.svg",
  },
  {
    src: "/images/feat_logo_03.svg",
  },
  {
    src: "/images/feat_logo_04.svg",
  },
  {
    src: "/images/feat_logo_05.svg",
  },
  {
    src: "/images/feat_logo_06.svg",
  },
  {
    src: "/images/feat_logo_07.svg",
  },
  {
    src: "/images/feat_logo_08.svg",
  },
];

// Features Section - logos anmation settings
export const LOGO_ANIMATION = [
  {
    //UEFA
    selector: "#logo_8",
    duration: 3,
    scale: 0.7,
    left: "3%",
    top: "23%",
    ease: "Power2.easeOut",
  },
  {
    //FIVB
    selector: "#logo_2",
    duration: 3,
    scale: 0.7,
    left: "33%",
    top: "30%",
    ease: "Power4.easeOut",
  },
  {
    //WIMBLEDON
    selector: "#logo_1",
    duration: 3,
    scale: 0.7,
    left: "35%",
    top: "10%",
    ease: "Power2.easeOut",
  },
  {
    //WLB
    selector: "#logo_4",
    duration: 3,
    scale: 0.7,
    left: "8%",
    top: "53%",
    ease: "Power4.easeOut",
  },
  {
    //NBA
    selector: "#logo_5",
    duration: 3,
    scale: 0.5,
    left: "33%",
    top: "57%",
    ease: "Power4.easeOut",
  },
  {
    //OLYMPIC
    selector: "#logo_6",
    duration: 3,
    scale: 1.1,
    left: "4%",
    top: "74%",
    ease: "Power3.easeOut",
  },
  {
    //Jリーグ
    selector: "#logo_3",
    duration: 3,
    scale: 0.6,
    left: "36%",
    top: "42%",
    ease: "Power4.easeOut",
  },
  {
    //PREMIER LEAGUE
    selector: "#logo_7",
    duration: 3,
    scale: 0.8,
    left: "2%",
    top: "9%",
    ease: "Power2.easeOut",
  },
];

// Features Section - Gallery
export const GALLERY = [];

// FAQ SECTION
export const FAQ = [
  {
    id: 1,
    title: "とにかくバスケが大好き！B1チームの予定をすべて把握したい！",
    content:
      "B1チームを検索してコレクション登録！MYカレンダーに情報が集約されます！",
  },
  {
    id: 2,
    title:
      "競技は関係なく、地元のチームを応援したい！そんな日程のまとめ方って出来る？",
    content: "都道府県の試合情報をまとめたカレンダーがおすすめです！",
  },
  {
    id: 3,
    title: "観戦が一番の趣味！一緒に観に行ってくれる友だちはいないかな？",
    content:
      "「みたい登録」と「シェアボタン」の2つのシェア機能で、友だちに観戦したい気持ちをシェア！",
  },
  {
    id: 4,
    title:
      "話題の試合や大会を追いかけたい！でも自分で探すのは大変...なにかいい方法はない？",
    content:
      "スポカレが厳選したオススメカレンダーや話題の試合を「おすすめ」ページで紹介！気になるカレンダーや試合はコレクション登録しよう！",
  },
  // {
  //   id: 5,
  //   title: "こんにちは！",
  //   content: "こんにちは！",
  // },
];

// USER REVIEW SECTION
export const REVIEWS = [
  {
    rate: 4,
    title: "良い",
    content:
      "試合日程や時間、場所を把握するのにかなり便利です。また、チケット購入までそのままいけちゃうので過去にないあぷり！",
    name: "mi.itさん",
    date: "2018-10-27",
  },
  {
    rate: 5,
    title: "試合情報量は日本一",
    content:
      "プロアマの試合もここまで網羅してるのはスポカレ以外ない？1番見やすいし他にはないコンセプトが良い。スポーツファンやスポーツ界関係者は特にこの便利さに気付くはず。絶対入れるべき。以前は動作がややもたついたがOSアップデートすると改善するよ。あと運営の真摯な対応にとても好感が持てる。スポーツ界も大変な時期だけど乗り越えていこう！",
    name: "スポーツギークさん",
    date: "2021-02-10",
  },
  {
    rate: 5,
    title: "スポーツ好きには良いアプリ",
    content:
      "自分の好きなスポーツやチームの情報を収集できて便利でした。最初は好きなスポーツをお気に入り登録してみたけど、意外とあまり知らないスポーツ情報でも気になってくる。今までになかったアプリなのでしばらく使ってみようと思いました。",
    name: "Hanumanさん",
    date: "2020-03-13",
  },
  {
    rate: 5,
    title: "観戦計画を立てるのにも大変便利！",
    content:
      "Bリーグやトップリーグが好きなのですが、自分が好きなチームの試合をまとめて管理できるので、観たかった試合の見逃しが減りました。とても便利に使わせていただいております。…",
    name: "^ ^〜♪さん",
    date: "2021/03/30",
  },
  {
    rate: 5,
    title: "観戦初心者にありがたいアプリ",
    content:
      "2022W杯からサッカー見始めた初心者ですが、各試合が何で見られるかの情報もサッと見れるのがありがたいです。",
    name: "はるしゃ芽さん",
    date: "2023/01/04",
  },
  {
    rate: 5,
    title: "もっと早く知りたかったー！！",
    content:
      "自分が興味のあるスポーツの情報だけ入ってくるよう設定できます！オリンピックの観たい競技がありすぎるので、このカレンダーで整理して計画的に観戦できるようにしました。オリンピック以外も、ソフトバンクホークスの試合を登録。あとは海外で活躍している日本人選手の情報も気になるので、MLBのエンジェルス、NBAのウィザーズとラプターズを登録してます！",
    name: "ペルシャ太郎さん",
    date: "2021/07/27",
  },
  {
    rate: 4,
    title: "もっと早く知りたかったー！！",
    content:
      "好きなスポーツ、チームの試合日程、放送日程が簡単に確認出来ます。見やすいし使いやすいと思います。幅広いスポーツに対応してます。今日、来週、来月は試合あるかなって時にとても便利です。結果はわからないようになってます。完全無料で変な広告が出る事も無いし満足出来てます。",
    name: "B'z921さん",
    date: "2020/08/13",
  },
  // Add more testimonials as needed
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: ["利用規約", "各種お問い合わせ", "プライバシーポリシー", "運営会社"],
    hrefs: [
      "https://spocale.com/terms",
      "https://corp.spocale.com/contact/",
      "https://spocale.com/privacy",
      "https://corp.spocale.com",
    ],
  },
];

export const SOCIALS = {
  title: "Socials",
  links: ["/images/x.svg", "/images/facebook.svg", "/images/note.svg"],
  urls: [
    "https://twitter.com/spocale_jp",
    "https://www.facebook.com/spocale/",
    "https://note.com/spocale/",
  ],
};
