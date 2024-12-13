import { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { searchPhotos, DEFAULT_PER_PAGE } from "./api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (!query) {
          return;
        }
        setLoading(true);
        setError(false);
        if (page === 1) {
          setImages([]);
        }
        const data = await searchPhotos(query, page);
        setLoadMore(data.results.length === DEFAULT_PER_PAGE);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [query, page]);

  const openModal = (img) => {
    setModalImage(img);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleLoadMore = () => setPage(page + 1);

  return (
    <>
      <SearchBar onSearch={setQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onModal={openModal} />
      )}
      {loading && <Loader />}
      {loadMore && <LoadMoreBtn onLoad={handleLoadMore} />}
      <ImageModal src={modalImage} isOpen={showModal} onClose={closeModal} />
    </>
  );
}

export default App;
