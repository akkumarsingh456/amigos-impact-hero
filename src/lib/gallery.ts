import g00 from "@/assets/gallery/img_00.jpg.asset.json";
import g01 from "@/assets/gallery/img_01.jpg.asset.json";
import g02 from "@/assets/gallery/img_02.jpg.asset.json";
import g03 from "@/assets/gallery/img_03.jpg.asset.json";
import g04 from "@/assets/gallery/img_04.jpg.asset.json";
import g05 from "@/assets/gallery/img_05.jpg.asset.json";
import g06 from "@/assets/gallery/img_06.jpg.asset.json";
import g07 from "@/assets/gallery/img_07.jpg.asset.json";
import g08 from "@/assets/gallery/img_08.jpg.asset.json";
import g09 from "@/assets/gallery/img_09.jpg.asset.json";
import g10 from "@/assets/gallery/img_10.jpg.asset.json";
import g11 from "@/assets/gallery/img_11.jpg.asset.json";
import g12 from "@/assets/gallery/img_12.jpg.asset.json";
import g13 from "@/assets/gallery/img_13.jpg.asset.json";
import g14 from "@/assets/gallery/img_14.jpg.asset.json";
import g15 from "@/assets/gallery/img_15.jpg.asset.json";
import g16 from "@/assets/gallery/img_16.jpg.asset.json";
import g17 from "@/assets/gallery/img_17.jpg.asset.json";
import g18 from "@/assets/gallery/img_18.jpg.asset.json";
import g19 from "@/assets/gallery/img_19.jpg.asset.json";
import g20 from "@/assets/gallery/img_20.jpg.asset.json";
import g21 from "@/assets/gallery/img_21.jpg.asset.json";
import g22 from "@/assets/gallery/img_22.jpg.asset.json";
import g23 from "@/assets/gallery/img_23.jpg.asset.json";

export const GALLERY = [
  g00, g01, g02, g03, g04, g05, g06, g07, g08, g09,
  g10, g11, g12, g13, g14, g15, g16, g17, g18, g19,
  g20, g21, g22, g23,
].map((a) => a.url);

// Assign photos to projects (approximate — brochure ordering)
export const PROJECT_PHOTOS: Record<string, string[]> = {
  seva:         [GALLERY[0], GALLERY[1], GALLERY[2], GALLERY[3], GALLERY[4]],
  udaan:        [GALLERY[5], GALLERY[6], GALLERY[7], GALLERY[8]],
  jeev:         [GALLERY[9], GALLERY[10], GALLERY[11]],
  prakriti:     [GALLERY[12], GALLERY[13], GALLERY[14], GALLERY[15]],
  bachpanshala: [GALLERY[16], GALLERY[17], GALLERY[18], GALLERY[19]],
  vikas:        [GALLERY[20], GALLERY[21], GALLERY[22], GALLERY[23]],
};
