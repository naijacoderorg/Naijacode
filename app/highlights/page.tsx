import React from 'react'

const highlights = () => {
  return (
    <div>
      <div className="hero">
      <div className="flex-1 pt-32 padding-x">
          <h1 className="hero__title"> We are pleased to announce that two 
              of our previous students have recieved scholarships to study abroad!
          </h1>
</div>
</div>

      <div className=" flex pt-36 padding-x ">
          <div className="highlight__image-container ">
              <img src="./studenthighlights.png" alt ="hero"
              className="object-contain" />
              
          </div>
      </div>
      <div className="hero ">
      <div className="flex-1 pt-10 padding-x text-3xl">
Congradulations Sanni Marvellous(left) and Zeal Achonu(right) stellar members of the class 2023! We are proud of your hard work and excited to see what the future holds.

        
      </div>
      </div>
    </div>
  )
}

export default highlights
