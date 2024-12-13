import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ query, page, onLoad }) {
  return (
    <button className={css.load} onClick={() => onLoad(query, page)}>
      Load More
    </button>
  );
}
