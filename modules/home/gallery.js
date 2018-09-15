import React from 'react'

const photos = [
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta1.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta2.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta3.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta4.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta5.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta6.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta7.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta8.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta9.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta10.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta11.jpg',
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta12.jpg',
  },
]

export default () => (
  <div className="masonry">
    {photos.map(({ src }) => (
      <figure className="masonry-brick" key={src}>
        <img src={src} alt="" className="masonry-img" />
      </figure>
    ))}

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx>{`
      .masonry {
        display: flex;
        flex-flow: row wrap;
        padding-left: .25rem;
        padding-top: .25rem;
        width: 100%;
      }

      .masonry-brick {
        flex: auto;
        min-width: 9rem;
        padding: 0 .25rem .25rem 0;
        margin: 0;
      }

      .masonry-brick:nth-child(4n+1){
        width: 16rem;
      }
      .masonry-brick:nth-child(4n+2){
        width: 20rem;
      }
      .masonry-brick:nth-child(4n+3){
        width: 12rem;
      }
      .masonry-brick:nth-child(4n+4){
        width: 24rem;
      }

      .masonry-img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
