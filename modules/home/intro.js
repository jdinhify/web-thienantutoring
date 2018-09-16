import React from 'react'

import colors from '../../config/colors'

export default () => (
  <div className="container">
    <div className="content">
      <h1>Thien An Tutoring Centre</h1>
      <h2>An ethnic school teaching English and Maths for Vietnamese students</h2>
    </div>

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx>{`
      .container {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .container::after {
        content: "";
        background: url(//files.jdinh.life/thienantutoring-org-au/math.jpg);
        background-size: cover;
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      .content {
        padding: 1rem;
      }

      h1 {
        color: ${colors.blue};
        border-bottom: 4px solid ${colors.yellow};
        display: inline-block;
        font-size: 3rem;
      }

      h2 {
        color: ${colors.blue};
        font-weight: 400;
        font-style: italic;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
