import React from 'react'

const Card = () => {
  return (
    <>
     <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=is&k=20&c=1sD5QszGcwtOECq-AU4pDL938hAN41E63SbfsimUzIk="
            alt="Card"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some imp text</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success text-white rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success text-white rounded">
                <option value="half">Half</option>
                 <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fs-S">Total Price</div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  )
}

export default Card
