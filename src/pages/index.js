import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  const images = [
    // { id: 1, url: '/images/image1.jpg' },
    // { id: 2, url: '/images/image2.png' },
    // { id: 3, url: '/images/image3.png' },
    { id: 1, url: 'http://130.211.16.62/images/image1.jpg' },
    { id: 2, url: 'http://130.211.16.62/images/image2.png' },
    { id: 3, url: 'http://130.211.16.62/images/image3.png' },
    // Agrega más objetos según sea necesario
  ];

  let previewUrl = ''; // URL de la imagen para la vista previa

  const handlePreview = (url) => {
    previewUrl = url;
  };

  return (
    <div className="container text-center mt-5" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 className="mb-4" style={{ color: 'black' }}>Visor Imágenes</h1>
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          {previewUrl && <Image src={previewUrl} alt="Vista previa" width={200} height={200} />}
        </div>
      </div>
      <ul className="list-unstyled">
        {images.map(image => (
          <li key={image.id} className="mb-2">
            <Link href={`/image/${image.id}`} passHref>
              <button
                onMouseEnter={() => handlePreview(image.url)}
                onMouseLeave={() => handlePreview('')}
                className="btn btn-link"
              >
                Imagen {image.id}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
