import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Data</button>
            </div>
        </header>
    )
}

export default Header