'use client'

export default function ImageModal({ images, onSelect }) {
    return (
      <div className='modal'>
        <div className='modal-content'>
          <h3>Select an image:</h3>
          <select onChange={(e) => onSelect(e.target.value)}>
            <option value=""></option>
            {images.map((image, index) => (
              <option key={index} value={image[0]+image[1]}>
                {image[1]}
              </option>
            ))}
          </select>
          <button onClick={() => onSelect(null)}>Cancel</button>
        </div>
      </div>
    );
};