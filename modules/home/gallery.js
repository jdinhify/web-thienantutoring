import React from 'react'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: '/static/ta1.JPG',
    width: 1600,
    height: 1067,
  },
  {
    src: '/static/ta2.JPG',
    width: 1600,
    height: 1067,
  },
  {
    src: '/static/ta3.JPG',
    width: 1600,
    height: 1067,
  },
  {
    src: '/static/ta4.JPG',
    width: 1504,
    height: 746,
  },
  {
    src: '/static/ta5.JPG',
    width: 1504,
    height: 1000,
  },
  {
    src: '/static/ta6.JPG',
    width: 3456,
    height: 2304,
  },
  {
    src: '/static/ta7.JPG',
    width: 3456,
    height: 2304,
  },
  {
    src: '/static/ta8.JPG',
    width: 3072,
    height: 2304,
  },
  {
    src: '/static/ta9.JPG',
    width: 3072,
    height: 2304,
  },
  {
    src: '/static/ta10.JPG',
    width: 3072,
    height: 2304,
  },
  {
    src: '/static/ta11.JPG',
    width: 4080,
    height: 2720,
  },
  {
    src: '/static/ta12.JPG',
    width: 3072,
    height: 2048,
  },
]

export default () => <Gallery photos={photos} />
