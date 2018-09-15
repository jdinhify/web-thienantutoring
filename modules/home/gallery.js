import React from 'react'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: '/static/ta1.jpg',
    width: 1600,
    height: 1067,
  },
  {
    src: '/static/ta2.jpg',
    width: 1600,
    height: 1067,
  },
  {
    src: '/static/ta3.jpg',
    width: 1600,
    height: 1067,
  },
  {
    src: '/static/ta4.jpg',
    width: 1504,
    height: 746,
  },
  {
    src: '/static/ta5.jpg',
    width: 1504,
    height: 1000,
  },
  {
    src: '/static/ta6.jpg',
    width: 3456,
    height: 2304,
  },
  {
    src: '/static/ta7.jpg',
    width: 3456,
    height: 2304,
  },
  {
    src: '/static/ta8.jpg',
    width: 3072,
    height: 2304,
  },
  {
    src: '/static/ta9.jpg',
    width: 3072,
    height: 2304,
  },
  {
    src: '/static/ta10.jpg',
    width: 3072,
    height: 2304,
  },
  {
    src: '/static/ta11.jpg',
    width: 4080,
    height: 2720,
  },
  {
    src: '/static/ta12.jpg',
    width: 3072,
    height: 2048,
  },
]

export default () => <Gallery photos={photos} />
