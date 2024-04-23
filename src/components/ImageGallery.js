import Image from 'next/image';

const ImageGallery = ({ images }) => {
  return (
    <div>
      <h2>Galería de imágenes</h2>
      <div className="image-grid">
        {images.map(image => (
          <div key={image.id} className="image-container">
            <Image src={image.url} alt={`Imagen ${image.id}`} width={300} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
