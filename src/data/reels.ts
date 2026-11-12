import type { ReelItem } from "@/components/simple/ReelsShowcase";

// $79 five-page website offer ad (home page spotlight).
export const OFFER_REEL: ReelItem = {
  src: "/reels/reel-4.mp4",
  poster: "/reels/reel-4.jpg",
  label: "5-page website for $79",
};

// Promo videos produced for clients (home page video section).
export const CLIENT_REELS: ReelItem[] = [
  { src: "/reels/work-haven-m4.mp4", poster: "/reels/work-haven-m4.jpg", label: "Haven Customs", caption: "Automotive · BMW M4 reel" },
  { src: "/reels/work-jm-genesis.mp4", poster: "/reels/work-jm-genesis.jpg", label: "JM Customs", caption: "Automotive · Genesis build" },
  { src: "/reels/work-haven-bmw.mp4", poster: "/reels/work-haven-bmw.jpg", label: "Haven Customs", caption: "Automotive · Tint reel" },
  { src: "/reels/work-luxe-auto.mp4", poster: "/reels/work-luxe-auto.jpg", label: "Luxe Auto", caption: "Automotive · Product promo" },
  { src: "/reels/work-hth-cryo.mp4", poster: "/reels/work-hth-cryo.jpg", label: "Hands That Heal", caption: "Health clinic · Reel + ad" },
];

// Reels made for Haven Customs (Our Work premium client section).
export const HAVEN_REELS: ReelItem[] = [
  { src: "/reels/work-haven-bmw.mp4", poster: "/reels/work-haven-bmw.jpg", label: "BMW tint glow-up" },
  { src: "/reels/work-haven-mazda.mp4", poster: "/reels/work-haven-mazda.jpg", label: "Mazda dashcam install" },
  { src: "/reels/work-haven-m4.mp4", poster: "/reels/work-haven-m4.jpg", label: "BMW M4 feature" },
  { src: "/reels/work-haven-customs-shop.mp4", poster: "/reels/work-haven-customs-shop.jpg", label: "Shop tour" },
];
