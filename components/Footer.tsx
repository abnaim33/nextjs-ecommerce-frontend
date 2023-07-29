import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className="mx-auto py-10">
            <p className="text-center text-xs ">
                &copy; {new Date().getFullYear()} ecommerce, Inc. All rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer