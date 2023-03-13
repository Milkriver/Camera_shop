export type TOfferItem = {
    id: number;
    name: string;
    vendorCode: string;
    type: string;
    category: string;
    description: string;
    level: string;
    rating: number;
    price: number;
    previewImg: string;
    previewImg2x: string;
    previewImgWebp: string;
    previewImgWebp2x: string;
    reviewCount: number;
  }

export type TReview = {
    id: string;
    userName: string;
    advantage: string;
    disadvantage: string;
    review: string;
    rating: number;
    createAt: string;
    cameraId: number;
  }

export type TPromoOffer = {
    id: number;
    name: string;
    previewImg: string;
    previewImg2x: string;
    previewImgWebp: string;
    previewImgWebp2x: string;
  }

export type TReviewPost = {
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}
export type TCouponPost = {
    coupon: string;
}

export type TOrderPost = {
    camerasIds: number[];
    coupon: string | null;
  }
