import useFetchData from '../hooks/useFetchData';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const { data, isLoading, error } = useFetchData();

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="grid">
          {data.map((item) => (
            <ProductCard key={item.id} item={item}></ProductCard>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
