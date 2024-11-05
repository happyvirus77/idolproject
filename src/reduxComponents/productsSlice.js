import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      idolGroup: "BTS",
      name: "BTS 스트랩 키링",
      category: "accessory",
      price: 12000,
      discount: 0,
      image: "image/bts/accessory/1.jpg",
    },
    {
      id: 2,
      idolGroup: "BTS",
      name: "BTS 피규어 키링",
      category: "accessory",
      price: 15000,
      discount: 0.1,
      image: "image/bts/accessory/2.jpg",
    },
    {
      id: 3,
      idolGroup: "BTS",
      name: "BTS 월드 미러 그립톡 넷마블 콜라보레이션",
      category: "accessory",
      price: 31200,
      discount: 0.1,
      image: "image/bts/accessory/3.png",
    },
    {
      id: 4,
      idolGroup: "BTS",
      name: "BTS 응원봉 Ver3 Official Light Stick (스페셜 에디션)",
      category: "stationery",
      price: 50000,
      discount: 0.1,
      image: "image/bts/stationery/1.png",
    },
    {
      id: 5,
      idolGroup: "BTS",
      name: "BTS 응원봉가방 ARMY 굿즈 선물 팬싸템 가방 응원봉",
      category: "stationery",
      price: 26960,
      discount: 0.1,
      image: "image/bts/stationery/2.png",
    },
    {
      id: 6,
      idolGroup: "BTS",
      name: "아미밤 bts 응원봉 커버 동물 토끼 털 커스텀",
      category: "stationery",
      price: 19000,
      discount: 0.1,
      image: "image/bts/stationery/3.png",
    },
    {
      id: 7,
      idolGroup: "뉴진스",
      name: "NewJeans Get Up 아크릴 스마트톡",
      category: "accessory",
      price: 28000,
      discount: 0,
      image: "image/newjeans/accessory/1.webp",
    },
    {
      id: 8,
      idolGroup: "뉴진스",
      name: "파워퍼프걸 뉴진스 그립톡",
      category: "accessory",
      price: 13000,
      discount: 0,
      image: "image/newjeans/accessory/2.jpg",
    },
    {
      id: 9,
      idolGroup: "뉴진스",
      name: "뉴진스키링 수제 뉴진스토끼 굿즈 OMG 5종세트 newjeans 민지 해린 하니",
      category: "accessory",
      price: 20000,
      discount: 0,
      image: "image/newjeans/accessory/3.jpg",
    },
    {
      id: 10,
      idolGroup: "뉴진스",
      name: "뉴진스 응원봉",
      category: "stationery",
      price: 64000,
      discount: 0.1,
      image: "image/newjeans/stationery/1.webp",
    },
    {
      id: 11,
      idolGroup: "뉴진스",
      name: "뉴진스 다이어리",
      category: "stationery",
      price: 45000,
      discount: 0.1,
      image: "image/newjeans/stationery/2.jpg",
    },
    {
      id: 12,
      idolGroup: "뉴진스",
      name: "뉴진스 스티커",
      category: "stationery",
      price: 13000,
      discount: 0.1,
      image: "image/newjeans/stationery/3.webp",
    },
    {
      id: 13,
      idolGroup: "세븐틴",
      name: "LENTICUALR ACRYLIC STAND ('17 IS RIGHT HERE')",
      category: "accessory",
      price: 13000,
      discount: 0,
      image: "image/seventeen/accessory/1.png",
    },
    {
      id: 14,
      idolGroup: "세븐틴",
      name: "LENTICUALR PHONETAB ('17 IS RIGHT HERE')",
      category: "accessory",
      price: 13000,
      discount: 0.1,
      image: "image/seventeen/accessory/2.png",
    },
    {
      id: 15,
      idolGroup: "세븐틴",
      name: "SEVENTEEN Mini Cube Keyring (17 RIGHT HERE)",
      category: "accessory",
      price: 15000,
      discount: 0,
      image: "image/seventeen/accessory/3.png",
    },
    {
      id: 16,
      idolGroup: "세븐틴",
      name: "LENTICUALR MINI CARD & BINDER ('17 IS RIGHT HERE')",
      category: "stationery",
      price: 40000,
      discount: 0.1,
      image: "image/seventeen/stationery/1.png",
    },
    {
      id: 17,
      idolGroup: "세븐틴",
      name: "Seventeen official Light Stick Carat Bong",
      category: "stationery",
      price: 80000,
      discount: 0.1,
      image: "image/seventeen/stationery/2.png",
    },
    {
      id: 18,
      idolGroup: "세븐틴",
      name: "Seventeen official sticker",
      category: "stationery",
      price: 15000,
      discount: 0,
      image: "image/seventeen/stationery/3.png",
    },
    {
      id: 19,
      idolGroup: "블랙핑크",
      name: "BPAirPodCase",
      category: "accessory",
      price: 30000,
      discount: 0.1,
      image: "image/blackpink/accessory/1.webp",
    },
    {
      id: 20,
      idolGroup: "블랙핑크",
      name: "BPCase",
      category: "accessory",
      price: 18000,
      discount: 0,
      image: "image/blackpink/accessory/2.png",
    },
    {
      id: 21,
      idolGroup: "블랙핑크",
      name: "BPGripToc",
      category: "accessory",
      price: 10000,
      discount: 0,
      image: "image/blackpink/accessory/3.jpeg",
    },
    {
      id: 22,
      idolGroup: "블랙핑크",
      name: "BP_Calender",
      category: "stationery",
      price: 21000,
      discount: 0.1,
      image: "image/blackpink/stationery/1.jpg",
    },
    {
      id: 23,
      idolGroup: "블랙핑크",
      name: "BPSlingBag",
      category: "stationery",
      price: 33000,
      discount: 0.1,
      image: "image/blackpink/stationery/2.webp",
    },
    {
      id: 24,
      idolGroup: "블랙핑크",
      name: "BPTheGamePhotoCard",
      category: "stationery",
      price: 8000,
      discount: 0.1,
      image: "image/blackpink/stationery/3.jpg",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
