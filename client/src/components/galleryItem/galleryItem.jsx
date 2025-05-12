import './galleryItem.css';

const GalleryItem = ({ media, width, height }) => {
    return (
        <div className='galleryItem'>
            <img src={media} alt="" />
        </div>
    );  
}

export default GalleryItem;