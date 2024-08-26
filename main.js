
function App() {
    return (
        <div style={{
            border : '1px solid red',
            display : 'flex',
            flexDirection : 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width : '100vw',
            padding : '20px 0px',
            gap:'25px',

        }}>
                <ShowPic />
                <ShowName />
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100vw',
                alignItems: 'center'
            }}>
                <ShowPost />
                <ShowFollowing />
                <ShowFollower />
            
            </div>
            
        </div>
    )
}








function ShowPic () {
    return(
        <div>
        <img style={{
        borderRadius : '50%'
        }} src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
    </div>
    )
}

function ShowName() {
    return(
        <div style={{
            display : 'flex',
            justifyContent: 'center',
            flexDirection : 'column',
            alignItems: 'center',
            gap:'10px',
            
        }}>
            <div style={{
                fontSize: '40px'
            }}>Julienne Moore</div>
            <div>julianne.moore@company.com</div>
        </div>
    )
}

function ShowPost() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent : 'space-around',
            textAlign: 'center',
            gap: '15px'
        }}>
            <p style={{fontSize: '30px'}}>25</p>
            <p style={{fontSize: '20px'}}>Posts</p>
        </div>
    )
}

function ShowFollowing() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent : 'space-around',
            textAlign: 'center',
            gap: '15px'
        }}>
             <p style={{fontSize: '30px'}}>350</p>
            <p style={{fontSize: '20px'}}>Following</p>
        </div>
    )
}

function ShowFollower() {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent : 'space-around',
            textAlign: 'center',
            margin: '0px',
            gap: '15px'
        }}>

            <p style={{fontSize: '30px'}}>1.5K</p>
            <p style={{fontSize: '20px'}}>followers</p>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)

