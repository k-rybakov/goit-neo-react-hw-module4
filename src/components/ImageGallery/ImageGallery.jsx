import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onModal }) {
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls }) => (
        <li key={id}>
          <ImageCard
            src={urls.small}
            alt={alt_description}
            fullImg={urls.regular}
            onModal={onModal}
          />
        </li>
      ))}
    </ul>
  );
}
