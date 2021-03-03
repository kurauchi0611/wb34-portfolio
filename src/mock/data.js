import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '倉内悠太郎のホームページ', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'ようこそ倉内悠太郎のホームページへ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'ようこそ',
  name: 'Yutaro Kurauchi',
  subtitle: 'のホームページへ',
  cta: 'about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'yutaro.jpg',
  paragraphOne: '倉内悠太郎',
  paragraphTwo: 'HAL東京WEB開発学科3年',
  paragraphThree: 'フロントエンドエンジニアの勉強をしています。ReactやNext.jsが好きです。',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'amitus_jp_en.png',
    title: 'amitus',
    info: '2020/03',
    info2: 'ペアプログラミングできるオンラインサービス。vtuberにもなれるよ！',
    url: 'https://amitus-99097.web.app/',
    repo: 'https://github.com/kurauchi0611/amitus-dev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'b-unrock.png',
    title: 'b-UNLOCK',
    info: '2019/08',
    info2: 'yahooのハッカソンで作った作品。指紋認証を使ったスマートロック。webAuthnでの生体認証を採用した。合宿楽しかった夏休み。',
    url: 'https://www.youtube.com/watch?v=Oft-5r43k7o&t=1815',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spider-irasutoya.png',
    title: 'スパイダーバースの予告編いらすとやを使ってCSSアニメーションで再現してみた。',
    info: '2019/06',
    info2: '2年次前期にWEBアニメーション研究会を立ち上げ、その活動報告で発表したもの。活動内容は、CSSのアニメーションを使って色々な動きを作るというもの。',
    url: 'https://spider-irasutoya.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'akane-ogp.jpg',
    title: 'アカネちゃん可愛いって言って',
    info: '2019/03',
    info2: `1年次の進級制作展で作成したもの。所謂チャットBot。チャットBot作りたいな
    キャラクターがいたら見た目楽しそう。
    キャラが動いたらいいのでは
    いっそ喋らせればいいじゃん。
    喋る、名前呼んでもらえる、動く。かわいい
    `,
    url: 'https://prettyakane.web.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'メールはこちらまで',
  btn: 'メールを送る',
  email: 'kurauchi.developer@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JHB892',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/kurauchi0611/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kurauchi0611',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
