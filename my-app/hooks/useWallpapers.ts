import { useState } from "react";

export interface Wallpaper {
  url: string;
  name: string;
}

interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpapers();
  return wallpapers.filter((wallpaper) => wallpaper.library);
}

export function useWallpapers(): FullWallpaper[] {
  return [
    {
      url: "https://example.com/image1.jpg",
      name: "Heritage",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://example.com/image2.jpg",
      name: "Late night",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      url: "https://example.com/image3.jpg",
      name: "Motivation",
      liked: false,
      suggested: true,
      library: false,
    },
    // more wallpapers
  ];
}
