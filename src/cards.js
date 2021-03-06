const cards = [
  {
    hiragana: "あ",
    katakana: "ア",
    romanji: ["a"],
  },
  {
    hiragana: "い",
    katakana: "イ",
    romanji: ["i"],
  },
  {
    hiragana: "う",
    katakana: "ウ",
    romanji: ["u"],
  },
  {
    hiragana: "え",
    katakana: "エ",
    romanji: ["e"],
  },
  {
    hiragana: "お",
    katakana: "オ",
    romanji: ["o"],
  },
  {
    hiragana: "か",
    katakana: "カ",
    romanji: ["ka"],
  },
  {
    hiragana: "き",
    katakana: "キ",
    romanji: ["ki"],
  },
  {
    hiragana: "く",
    katakana: "ク",
    romanji: ["ku"],
  },
  {
    hiragana: "け",
    katakana: "ケ",
    romanji: ["ke"],
  },
  {
    hiragana: "こ",
    katakana: "コ",
    romanji: ["ko"],
  },
  {
    hiragana: "きゃ",
    katakana: "キャ",
    romanji: ["kya"],
  },
  {
    hiragana: "きゅ",
    katakana: "キュ",
    romanji: ["kyu"],
  },
  {
    hiragana: "きょ",
    katakana: "キョ",
    romanji: ["kyo"],
  },
  {
    hiragana: "さ",
    katakana: "サ",
    romanji: ["sa"],
  },
  {
    hiragana: "し",
    katakana: "シ",
    romanji: ["shi"],
  },
  {
    hiragana: "す",
    katakana: "ス",
    romanji: ["su"],
  },
  {
    hiragana: "せ",
    katakana: "セ",
    romanji: ["se"],
  },
  {
    hiragana: "そ",
    katakana: "ソ",
    romanji: ["so"],
  },
  {
    hiragana: "しゃ",
    katakana: "シャ",
    romanji: ["sha"],
  },
  {
    hiragana: "しゅ",
    katakana: "シュ",
    romanji: ["shu"],
  },
  {
    hiragana: "しょ",
    katakana: "ショ",
    romanji: ["sho"],
  },
  {
    hiragana: "た",
    katakana: "タ",
    romanji: ["ta"],
  },
  {
    hiragana: "ち",
    katakana: "チ",
    romanji: ["chi"],
  },
  {
    hiragana: "つ",
    katakana: "ツ",
    romanji: ["tsu"],
  },
  {
    hiragana: "て",
    katakana: "テ",
    romanji: ["te"],
  },
  {
    hiragana: "と",
    katakana: "ト",
    romanji: ["to"],
  },
  {
    hiragana: "ちゃ",
    katakana: "チャ",
    romanji: ["cha"],
  },
  {
    hiragana: "ちゅ",
    katakana: "チュ",
    romanji: ["chu"],
  },
  {
    hiragana: "ちょ",
    katakana: "チョ",
    romanji: ["cho"],
  },
  {
    hiragana: "な",
    katakana: "ナ",
    romanji: ["na"],
  },
  {
    hiragana: "に",
    katakana: "ニ",
    romanji: ["ni"],
  },
  {
    hiragana: "ぬ",
    katakana: "ヌ",
    romanji: ["nu"],
  },
  {
    hiragana: "ね",
    katakana: "ネ",
    romanji: ["ne"],
  },
  {
    hiragana: "の",
    katakana: "ノ",
    romanji: ["no"],
  },
  {
    hiragana: "にゃ",
    katakana: "ニャ",
    romanji: ["nya"],
  },
  {
    hiragana: "にゅ",
    katakana: "ニュ",
    romanji: ["nyu"],
  },
  {
    hiragana: "にょ",
    katakana: "ニョ",
    romanji: ["nyo"],
  },
  {
    hiragana: "は",
    katakana: "ハ",
    romanji: ["ha"],
  },
  {
    hiragana: "ひ",
    katakana: "ヒ",
    romanji: ["hi"],
  },
  {
    hiragana: "ふ",
    katakana: "フ",
    romanji: ["fu"],
  },
  {
    hiragana: "へ",
    katakana: "ヘ",
    romanji: ["he"],
  },
  {
    hiragana: "ほ",
    katakana: "ホ",
    romanji: ["ho"],
  },
  {
    hiragana: "ひゃ",
    katakana: "ヒャ",
    romanji: ["hya"],
  },
  {
    hiragana: "ひゅ",
    katakana: "ヒュ",
    romanji: ["hyu"],
  },
  {
    hiragana: "ひょ",
    katakana: "ヒョ",
    romanji: ["hyo"],
  },
  {
    hiragana: "ま",
    katakana: "マ",
    romanji: ["ma"],
  },
  {
    hiragana: "み",
    katakana: "ミ",
    romanji: ["mi"],
  },
  {
    hiragana: "む",
    katakana: "ム",
    romanji: ["mu"],
  },
  {
    hiragana: "め",
    katakana: "メ",
    romanji: ["me"],
  },
  {
    hiragana: "も",
    katakana: "モ",
    romanji: ["mo"],
  },
  {
    hiragana: "みゃ",
    katakana: "ミャ",
    romanji: ["mya"],
  },
  {
    hiragana: "みゅ",
    katakana: "ミュ",
    romanji: ["myu"],
  },
  {
    hiragana: "みょ",
    katakana: "ミョ",
    romanji: ["myo"],
  },
  {
    hiragana: "や",
    katakana: "ヤ",
    romanji: ["ya"],
  },
  {
    hiragana: "ゆ",
    katakana: "ユ",
    romanji: ["yu"],
  },
  {
    hiragana: "よ",
    katakana: "ヨ",
    romanji: ["yo"],
  },
  {
    hiragana: "ら",
    katakana: "ラ",
    romanji: ["ra"],
  },
  {
    hiragana: "り",
    katakana: "リ",
    romanji: ["ri"],
  },
  {
    hiragana: "る",
    katakana: "ル",
    romanji: ["ru"],
  },
  {
    hiragana: "れ",
    katakana: "レ",
    romanji: ["re"],
  },
  {
    hiragana: "ろ",
    katakana: "ロ",
    romanji: ["ro"],
  },
  {
    hiragana: "りゃ",
    katakana: "リャ",
    romanji: ["rya"],
  },
  {
    hiragana: "りゅ",
    katakana: "リュ",
    romanji: ["ryu"],
  },
  {
    hiragana: "りょ",
    katakana: "リョ",
    romanji: ["ryo"],
  },
  {
    hiragana: "わ",
    katakana: "ワ",
    romanji: ["wa"],
  },
  {
    hiragana: "ゐ",
    katakana: "ヰ",
    romanji: ["wi"],
  },
  {
    hiragana: "ゑ",
    katakana: "ヱ",
    romanji: ["we"],
  },
  {
    hiragana: "を",
    katakana: "ヲ",
    romanji: ["wo"],
  },
  {
    hiragana: "ん",
    katakana: "ン",
    romanji: ["n"],
  },
  {
    hiragana: "が",
    katakana: "ガ",
    romanji: ["ga"],
  },
  {
    hiragana: "ぎ",
    katakana: "ギ",
    romanji: ["gi"],
  },
  {
    hiragana: "ぐ",
    katakana: "グ",
    romanji: ["gu"],
  },
  {
    hiragana: "げ",
    katakana: "ゲ",
    romanji: ["ge"],
  },
  {
    hiragana: "ご",
    katakana: "ゴ",
    romanji: ["go"],
  },
  {
    hiragana: "ぎゃ",
    katakana: "ギャ",
    romanji: ["gya"],
  },
  {
    hiragana: "ぎゅ",
    katakana: "ギュ",
    romanji: ["gyu"],
  },
  {
    hiragana: "ぎょ",
    katakana: "ギョ",
    romanji: ["gyo"],
  },
  {
    hiragana: "ざ",
    katakana: "ザ",
    romanji: ["za"],
  },
  {
    hiragana: "じ",
    katakana: "ジ",
    romanji: ["ji"],
  },
  {
    hiragana: "ず",
    katakana: "ズ",
    romanji: ["zu"],
  },
  {
    hiragana: "ぜ",
    katakana: "ゼ",
    romanji: ["ze"],
  },
  {
    hiragana: "ぞ",
    katakana: "ゾ",
    romanji: ["zo"],
  },
  {
    hiragana: "じゃ",
    katakana: "ジャ",
    romanji: ["ja"],
  },
  {
    hiragana: "じゅ",
    katakana: "ジュ",
    romanji: ["ju"],
  },
  {
    hiragana: "じょ",
    katakana: "ジョ",
    romanji: ["jo"],
  },
  {
    hiragana: "だ",
    katakana: "ダ",
    romanji: ["da"],
  },
  {
    hiragana: "ぢ",
    katakana: "ヂ",
    romanji: ["ji", "dji", "jyi"],
  },
  {
    hiragana: "づ",
    katakana: "ヅ",
    romanji: ["dzu", "zu"],
  },
  {
    hiragana: "で",
    katakana: "デ",
    romanji: ["de"],
  },
  {
    hiragana: "ど",
    katakana: "ド",
    romanji: ["do"],
  },
  {
    hiragana: "ぢゃ",
    katakana: "ヂャ",
    romanji: ["ja"],
  },
  {
    hiragana: "ぢゅ",
    katakana: "ヂュ",
    romanji: ["ju"],
  },
  {
    hiragana: "ぢょ",
    katakana: "ヂョ",
    romanji: ["jo"],
  },
  {
    hiragana: "ば",
    katakana: "バ",
    romanji: ["ba"],
  },
  {
    hiragana: "び",
    katakana: "ビ",
    romanji: ["bi"],
  },
  {
    hiragana: "ぶ",
    katakana: "ブ",
    romanji: ["bu"],
  },
  {
    hiragana: "べ",
    katakana: "ベ",
    romanji: ["be"],
  },
  {
    hiragana: "ぼ",
    katakana: "ボ",
    romanji: ["bo"],
  },
  {
    hiragana: "びゃ",
    katakana: "ビャ",
    romanji: ["bya"],
  },
  {
    hiragana: "びゅ",
    katakana: "ビュ",
    romanji: ["byu"],
  },
  {
    hiragana: "びょ",
    katakana: "ビョ",
    romanji: ["byo"],
  },
  {
    hiragana: "ぱ",
    katakana: "パ",
    romanji: ["pa"],
  },
  {
    hiragana: "ぴ",
    katakana: "ピ",
    romanji: ["pi"],
  },
  {
    hiragana: "ぷ",
    katakana: "プ",
    romanji: ["pu"],
  },
  {
    hiragana: "ぺ",
    katakana: "ペ",
    romanji: ["pe"],
  },
  {
    hiragana: "ぽ",
    katakana: "ポ",
    romanji: ["po"],
  },
  {
    hiragana: "ぴゃ",
    katakana: "ピャ",
    romanji: ["pya"],
  },
  {
    hiragana: "ぴゅ",
    katakana: "ピュ",
    romanji: ["pyu"],
  },
  {
    hiragana: "ぴょ",
    katakana: "ピョ",
    romanji: ["pyo"],
  },
];

const getRandomCard = (answer = "") => {
  let properLength = true;
  let result = cards[Math.floor(Math.random() * cards.length)];
  if (!answer) {
    return result;
  }
  while (answer === result.romanji[0] || properLength) {
    result = cards[Math.floor(Math.random() * cards.length)];
    if (result.romanji[0].length === answer.length) {
      properLength = false;
    }
  }
  return result;
};

const getRomanji = (card) => card.romanji;

const getHiragana = (card) => card.hiragana;

const checkInputCorrect = (input, card) => card.romanji.includes(input);

export { cards, getRandomCard, getRomanji, getHiragana, checkInputCorrect };
