import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { IoBookmarkOutline } from 'react-icons/io5';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaRegEye } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='m-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
                </div>
                <div>
                    <IoBookmarkOutline></IoBookmarkOutline>
                    <IoShareSocialOutline></IoShareSocialOutline>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}.... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center gap-2'>
                  <Rating style={{ maxWidth: 150 }} 
                  value={Math.round(rating?.number || 0)} readOnly />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
