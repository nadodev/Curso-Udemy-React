export const  TextInput = ({searchValue, handleChange}) => {
    return (
        
        <div className="pesquisar">
        <input type="search" className="form-control" 
        placeholder="Pesquisar" 
        onChange={handleChange}
        value={searchValue}

        />
        </div>
    )
}