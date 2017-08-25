import * as React from 'react'
export const DefaultLayout = (props: React.HTMLProps<any>) => {
    return (
        <div className="layout">
            <header>
                <h1>Customer User Management</h1>
            </header>
            <main>
                {
                    React.Children.only(props.children)
                }
            </main>
            <footer>
                @copyright DieuPX
            </footer>
        </div>    
    )
}

export const ContentLayout = (props: React.HTMLProps<any>) => {
    return (
        <div className="layout">
            <main>
                {
                    React.Children.only(props.children)
                }
            </main>        
        </div>    
    )
}
