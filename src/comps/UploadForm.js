import React, { useState } from 'react'

const UploadForm = () => {
 const [file, setFile] = useState(null);
 const [error, setError] = useState('');
 const types = ['image/png', 'image/jpeg']
 const handleChange = (e) => {
  const selected = e.target.files[0]
  if (selected && types.includes(selected.type)) {
   setFile(selected)
   setError('')
  } else {
   setFile(null)
   setError('Please select an image file (pmg or jpeg)')
  }
 }
 return (
  <form >
   <input type="file" onChange={handleChange} />
   <div className="out">
    {error && <div className="error">{error}</div>}
    {file && <div>{file.name}</div>}
   </div>
  </form>

 )
}

export default UploadForm
