import React from 'react'
import { Link } from "react-router-dom"

import { DocsIcon, CodeIcon } from '../Base'

const newsContent = [
  {
    id: 4,
    type: 'acad',
    title: 'Started postdoc at Institut de Physique du Globe de Paris (IPGP)',
    date: 'March 1st, 2023',
    res: [
    ]
  },
  {
    id: 3,
    type: 'acad',
    title: 'Obtained Ph.D. from University Grenoble-Alpes',
    date: 'December 9th, 2022',
    res: [
      ['docs', 'Thesis', 'https://theses.hal.science/tel-04028879v1/file/FREZAT_2022_diffusion.pdf']
    ]
  },
  {
    id: 2,
    type: 'spub',
    title: <>New paper accepted in <i>Journal of Advances in Modeling Earth Systems</i></>,
    date: 'September  27th, 2022',
    res: [
      ['docs', 'Preprint', 'https://arxiv.org/pdf/2204.03911'],
      ['code', 'Code', '#']
    ]
  },
  {
    id: 1,
    type: 'spub',
    title: <>New paper accepted in <i>Physical Review Fluids</i></>,
    date: 'February  1st, 2021',
    res: [
      ['docs', 'Preprint', 'https://arxiv.org/pdf/2010.04663'],
      ['code', 'Code', '#']
    ]
  },
  {
    id: 0,
    type: 'acad',
    title: 'Started Ph.D. program at University Grenoble-Alpes',
    date: 'October 1st, 2019',
    res: [
      ['docs', 'Proposal', '#']
    ]
  }
]

function NewsIcon({ type, className }) {
  const iconTypeMap = {
    'docs': <DocsIcon className={className} />,
    'code': <CodeIcon className={className} />
  }

  return (
    iconTypeMap[type]
  )
}

export default function News() {
  return (
    <article>
      <h4>News</h4>
      <hr />
      {newsContent.map((news) => (
      <div key={news.id} className="news-entry">
        <h4 className="info"><i>{news.date}</i></h4>
        <div className="news-content">
          <h4 className="title">
            {news.title}
          </h4>
          {news.res.map(([type, desc, url]) => (
            <a key={desc} href={url} className="resource">
              {desc}
              <NewsIcon type={type} className="icon" />
            </a>
          ))}
        </div>
      </div>
      ))}
      <ul className="pagination">
        <li><Link to="/">Prev</Link></li>
        <li><Link to="/">1</Link></li>
        <li><Link to="/">Next</Link></li>
      </ul>
    </article>
  )
}
