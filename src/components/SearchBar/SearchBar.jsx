import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();

    if (!query) {
      toast.error("PLease enter search term");
      return;
    }

    onSearch(query);
    form.reset();
  };

  return (
    <header className={css.searchbox}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autoFocus
          placeholder="Search photos..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
