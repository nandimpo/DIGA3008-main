export default function Lightbox({ image, overlayRef, close }) {
  return (
    <div
      ref={overlayRef}
      className={`lightbox-overlay${image ? ' is-open' : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <button type="button" className="lightbox-close" aria-label="Close image" onClick={close}>
        &times;
      </button>
      {image && <img className="lightbox-image" src={image.src} alt={image.alt} />}
    </div>
  );
}
