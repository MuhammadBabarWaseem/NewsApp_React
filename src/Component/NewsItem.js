import React  from 'react'

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date } = props;
        return (
            <div>
                <div className="card" style={{ width: '18rem', height: '30rem' }}>
                    <img src={!imageUrl ? 'https://statics.ambcrypto.com/wp-content/uploads/2022/09/PP-2-APE-cover-1000x600.jpg' : imageUrl} className="card-img-top" width="180" height="180" alt="..." />
                    <span className="badge text-bg-dark"> By :  {!author ? 'Unknown' : author}</span>
                    <div className="card-body">
                        <h5 className="card-title">{title}....</h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className='text-muted'>Last updated {new Date(date).toUTCString()} ago</small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem