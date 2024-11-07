import { useRouter } from 'next/router';

const CharacterFilter = () => {
  const router = useRouter();

  // Filtre değişikliği işlemi
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    router.push({
      pathname: '/',
      query: { ...router.query, [name]: value },
    });
  };

  // Filtre temizleme işlemi
  const handleClearFilters = () => {
    router.push({
      pathname: '/',
      query: {}, 
    });
  };

  // Filtrelerin mevcut durumunu kontrol yeri
  const isFilterApplied = router.query.status || router.query.gender;

  return (
    <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center text-center ">
      <select
        name="status"
        onChange={handleFilterChange}
        value={router.query.status || ''}  // Filtre varsa, seçilen değeri göster, yoksa varsayılan değeri döner
        className="bg-white border border-gray-300 text-black rounded-lg p-3 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        name="gender"
        onChange={handleFilterChange}
        value={router.query.gender || ''}  // Filtre varsa, seçilen değeri göster, yoksa varsayılan değeri (empty string)
        className="bg-white border border-gray-300 text-black rounded-lg p-3 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <button
        onClick={handleClearFilters}
        className={`bg-white border border-gray-300 text-black rounded-lg p-3 hover:bg-gray-100 transition ${isFilterApplied ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
        disabled={!isFilterApplied} // Buton yalnızca filtre uygulandıysa aktif olur
      >
        Clear Filters
      </button>
    </div>
  );
};

export default CharacterFilter;
