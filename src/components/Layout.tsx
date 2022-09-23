interface ILayout {
    children: JSX.Element | JSX.Element[]
    title: string
}

export const Layout = ({ children, title }: ILayout) => {
    return (
        <div className="container">
            <h2 className="title">{title}</h2>
            {children}
        </div>
    )
}