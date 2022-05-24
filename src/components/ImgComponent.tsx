// @ts-nocheck

export function ImgComponent({ src }) {
  return (
    <div className='ImgComponent'>
      <img src={src} />
    </div>
  );
}
export function ImgComponent2({ src, src2 }) {
  return (
    <div className='ImgComponent2'>
      <img src={src} />
      <img src={src2} />
    </div>
  );
}
