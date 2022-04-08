import React from 'react'

export default function Loading() {
    return (
        <div className='d-flex justify-content-center'>
            <div className="spinner-border text-primary  my-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
