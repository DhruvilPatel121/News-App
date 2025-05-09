import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <Oval
        height={40}
        width={40}
        color="#2563eb"
        // wrapperStyle={{}}
        // wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#60a5fa"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  )
}

export default Loader
