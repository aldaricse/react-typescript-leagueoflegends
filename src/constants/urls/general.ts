const BASE_URL = import.meta.env.VITE_URL_API

export const GeneralUrl = {
  CHAMPIONS_ALL_DATA_URL: "/en_US/champion.json",
  CHAMPION_DETAIL_DATA_URL: "/en_US/champion/{id}.json",
  CHAMPION_THUMBNAIL_IMAGE_URL: BASE_URL + "/cdn/img/champion/loading/{id}_0.jpg",
  CHAMPION_SPLASH_IMAGE_URL: BASE_URL + "/cdn/img/champion/splash/{id}_{num}.jpg",
  CHAMPION_MINI_IMAGE_URL: BASE_URL + "/cdn/13.11.1/img/champion/{id}",
  CHAMPION_SPELL_IMAGE_URL: BASE_URL + "/cdn/13.11.1/img/spell/{id}.png",
  CHAMPION_PASSIVE_IMAGE_URL: BASE_URL + "/cdn/13.11.1/img/passive/{id}",
}