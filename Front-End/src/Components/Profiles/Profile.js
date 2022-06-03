import './Profile.css';

const Profile = (props) => {
    const { name, bio, image, github } = props.data; 
    return (
        <div className='profile'>
            <div className='card'>
                <div>
                    <p>
                        <img src={ image } alt='Headshot'/>
                    </p>
                    <h2 className='name'>{name}</h2>
                    <p className='bio'>{bio}</p>
                    <a className='github' href={github}>GitHub</a>
                </div>    
            </div>
        </div>
    )
};

export default Profile; 