import './search.css'

const Search = ({ value, onChangeData }) => {
  return (
    <input
      className='searchInput' 
      type="text" 
      placeholder="Buscar..."
      value={value}
      onChange={onChangeData}
    />
  )
}

export default Search;