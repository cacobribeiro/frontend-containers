import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <h2 className="m-auto text-info" onClick={() => (window.location.href = '/home')}>
                Containers
            </h2>
            <button
                type="button"
                onClick={() => (window.location.href = '/create')}
                class="btn btn-primary"
            >
                +
            </button>
        </nav>
    );
}

export default Header;
