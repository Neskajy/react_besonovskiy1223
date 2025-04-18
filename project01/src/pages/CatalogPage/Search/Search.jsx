export default function Search({handleChange}){
    return(
        <input onChange={handleChange} tipe='text'
        placeholder="Поиск..." stile=
        {{border: '1px solid #e5e5e5',
        padding:'40px', marginBottom:
        "40px", marginTop:'40px'}}/>
    )
}