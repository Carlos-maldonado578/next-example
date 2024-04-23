import Image from 'next/image';
import Link from 'next/link';

const ImagePage = ({ id, image }) => {
  if (!image) {
    return <div>Imagen no encontrada</div>;
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="mb-4">Imagen ID: {id}</h1>
      <div className="mb-4">
        <Image src={image.url} alt={`Imagen ${id}`} width={500} height={500} />
      </div>
      <button onClick={() => window.location.href = '/'} className="btn btn-primary">Volver al inicio</button>
    </div>
  );
};

export default ImagePage;

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Supongamos que tienes un arreglo de objetos con información de las imágenes
  const images = [
    { id: 1, url: '/images/image1.jpg' },
    { id: 2, url: '/images/image2.png' },
    { id: 3, url: '/images/image3.png' },
    // Agrega más objetos según sea necesario
  ];

  // Encuentra la imagen correspondiente al ID proporcionado
  const image = images.find(img => img.id === parseInt(id));

  return { props: { id, image } };
}
