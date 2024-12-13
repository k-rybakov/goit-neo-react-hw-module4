import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt, fullImg, onModal }) {
  return (
    <div onClick={() => onModal(fullImg, true)} className={css.card}>
      <img src={src} alt={alt} />
    </div>
  );
}
