const Layout = ({ children }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout