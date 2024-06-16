export default function TextField({placeholder,value,onChange,key}) {
  return (
    <div className='input-container' >
        <input type="text"  placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
    
  )
}
