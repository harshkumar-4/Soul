/**
 * Precomputed tiny WebP low-quality image placeholders (LQIP) for local assets.
 * Enables instant blurred previews on frame 0 with zero layout shift.
 */
const IMAGE_BLUR_DATA_URLS: Record<string, string> = {
  '/image/1.webp':
    'data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoQAAsAA8BgJbACdAD5DLxzkADOGHPSSrVG1CRJeTQLSGrFJxdPUDfFYQ7+hfGZVOghl/Mem30wBMOiuTB7D9y4B1LhOVDXNsgAAA==',
  '/image/2.webp':
    'data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoQAAsAA8BgJYgCdAD0NJUvAAAA+mEfC2Vl9zcpzzhQ0rlrgXmqWMeYmvuepgAA',
  '/image/3.webp':
    'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoQAAkAA8BgJQBOgCHcUWGSAAD81cY5XVFj5/aAPqVg4f7ldsXEFfxdLmudQ+NFiX76gAAA',
  '/image/33.webp':
    'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoQAAsAA8BgJQBOgB5zLAAA/j89bJyn3fcjV2S4WdaJV+f31IaOqItIhzCLYiGloAA=',
  '/image/aaron.webp':
    'data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoQAAsAA8BgJQBWACPsTgkVYAD+m4TgQq8ycEhnUB7FF/kWP7aK1CYzAyupIZ34l4vwRqivmtl9JQZTw60SmRgB4a3HgAAA',
  '/image/taishi.webp':
    'data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoQAAsAA8BgJZAC7ACzp6qNKAAA/jbpHZ/I6vO0sk2ucf6O0lPOk3+GbKmhs3zS2Rk8UnrfHMzriCAA',
  '/image/phili.webp':
    'data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoQAAsAA8BgJYwCdAEDevadgAD+lMGism/sTuC1iyeTGDTfiO4wAA==',
  '/image/boat.jpeg':
    'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoQAAgAA8BgJbACdAEUpO5304AA/uAGAaj7xtMRkiRynWcfrec7I4coMzS4YwdQt1gH6rljsIhBCb5fTfy/dc5sYN0GI/AAAAA=',
  '/image/farm.jpeg':
    'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQAgCdASoQAAgAA8BgJbACdADjdmDLvKSAAPZ18JeBInVgoQ7JCk71Vajs9ksWPal1ypa/NPtT/Ku0H/L6Kbkdb4r5ZvInKFvvJwtAAAA=',
  '/image/group.jpeg':
    'data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoQAAkAA8BgJagCdAEfZN5GSEAA/P+y096bcE/IvgtfGfMk0tl87VvO0KsLfK20Z3/WUgdCjsh7Vlqyb7dUoJR2NboAAA==',
  '/image/grp.jpeg':
    'data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACwAQCdASoQAAoAA8BgJbACdAEMFxTAAP7uUm0ZaY7Gb63APcK6RKZU5KxoMZ7DhEp1JR6ky3tFRBsCD3wQptGLL4AdMZzHq51KkjBx/QmeG44B6Hy8wAAA',
  '/image/mount.jpeg':
    'data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoQAAcAA8BgJbACdAEegM/D8UQAAP48QXMMQ2XFfsa7+w0HkBv2RqhJ3YpBGQVdhpCksgAA',
  '/image/sky.jpeg':
    'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoQAAkAA8BgJbACdH8AGBZdmdQA/uGEnZtBF9uvsEroG8aJs33MhhtlRPo3PZ5r/tCe8R4AAAA=',
  '/images/buddha-forest.webp':
    'data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoQAAkAA8BgJQBdgCB8gSatQAD+9dBNf4/sWQkpFKOTK6t8IaMas/QVRPQwZSETaYtOc9dhxIKfqZ39vxWQAAAA',
  '/images/m1.webp':
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoQAAkAA8BgJZQAAtiLCgAA/rYeI5upe/YzqnjRdtZzHbJbQu3BsgAA',
  '/images/t1.webp':
    'data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAACAAADwAAQUxQSBMAAAABD3D//4iIICQg+D9a9iCi/8lMAFZQOCBaAAAAEAIAnQEqCQAQAAPAYCWwAnQA3bEoFj1mAAD+7DCR38vr+ltVvHqbTzL2qzwb2clkTM5e3fyLFLinJTrs7UO2e1x+eXQqrkdSe8LotsJg6YI1Gw20UggHbgAA',
};

export function getImageBlurDataURL(src: string): string | undefined {
  return IMAGE_BLUR_DATA_URLS[src];
}

export function getBlurProps(src: string): {
  placeholder?: 'blur';
  blurDataURL?: string;
} {
  const blurDataURL = getImageBlurDataURL(src);
  if (!blurDataURL) return {};
  return { placeholder: 'blur', blurDataURL };
}

