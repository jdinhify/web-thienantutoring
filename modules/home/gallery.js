import React from 'react'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta1.jpg',
    width: 1600,
    height: 1067,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta2.jpg',
    width: 1600,
    height: 1067,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta3.jpg',
    width: 1600,
    height: 1067,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta4.jpg',
    width: 1504,
    height: 746,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta5.jpg',
    width: 1504,
    height: 1000,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta6.jpg',
    width: 3456,
    height: 2304,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta7.jpg',
    width: 3456,
    height: 2304,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta8.jpg',
    width: 3072,
    height: 2304,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta9.jpg',
    width: 3072,
    height: 2304,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta10.jpg',
    width: 3072,
    height: 2304,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta11.jpg',
    width: 4080,
    height: 2720,
  },
  {
    src: '//files.jdinh.life/thienantutoring-org-au/ta12.jpg',
    width: 3072,
    height: 2048,
  },
]

export default () => <Gallery photos={photos} />
