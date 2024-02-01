import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {

    const containerStyle = {
        backgroundImage: 'url("https://i.ibb.co/Kbghtmk/6325254.jpg")', // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', 
    };

    return (
        <div className='px-20 ' style={containerStyle}>
            <Helmet>
                <title>Error | Pearl Ashore</title>
                <meta name="description" content="This is my awesome app." />
            </Helmet>
            <h1 className="text-6xl text-black mb-40 font-bold"> Page Not Found</h1>
            <Link to='/'><button className='btn btn-warning'>Go Home</button></Link>
        </div>
    );
};

export default Error;
