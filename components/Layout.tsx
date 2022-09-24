export interface Props {
    children: JSX.Element[];
}

const Layout = ({ children }: Props) => {
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