import React from 'react'
import { Link } from "react-router-dom"

import { DocsIcon, CodeIcon } from '../Base'

export default function News() {
  function NewsResource({ icon, desc, url }) {
    return (
      <a href={url} className="resource">
        {desc}
        {icon}
      </a>
    )
  }

  function NewsEntry({ title, date, children }) {
    return (
      <div className="news-entry">
        <h4 className="info"><i>{date}</i></h4>
        <div className="news-content">
          <h4 className="title">{title}</h4>
          {children}
        </div>
      </div>
    )
  }

  return (
    <article>
      <h4>News</h4>
      <hr />
      <NewsEntry 
        title={<>Started postdoc at Institut de Physique du Globe de Paris (IPGP)</>} 
        date='March 1st, 2023' 
      />
      <NewsEntry 
        title={<>Obtained Ph.D. from University Grenoble-Alpes</>} 
        date='December 9th, 2022'
      >
        <NewsResource icon={<DocsIcon />} desc='Thesis' url='https://theses.hal.science/tel-04028879v1/file/FREZAT_2022_diffusion.pdf'/>
      </NewsEntry>
      <NewsEntry 
        title={<>New paper accepted in <i>Journal of Advances in Modeling Earth Systems</i></>} 
        date='September  27th, 2022'
      >
        <NewsResource icon={<DocsIcon />} desc='Preprint' url='https://arxiv.org/pdf/2204.03911' />
        <NewsResource icon={<CodeIcon />} desc='Code' url='#' />
      </NewsEntry>
      <NewsEntry 
        title={<>New paper accepted in <i>Physical Review Fluids</i></>} 
        date='February 1st, 2021'
      >
        <NewsResource icon={<DocsIcon />} desc='Preprint' url='https://arxiv.org/pdf/2010.04663' />
        <NewsResource icon={<CodeIcon />} desc='Code' url='#' />
      </NewsEntry>
      <NewsEntry 
        title={<>Started Ph.D. program at University Grenoble-Alpes</>} 
        date='October 1st, 2019'
      >
        <NewsResource icon={<DocsIcon />} desc='Proposal' url='#' />
      </NewsEntry>
      <ul className="pagination">
        <li><Link to="/">Prev</Link></li>
        <li><Link to="/">1</Link></li>
        <li><Link to="/">Next</Link></li>
      </ul>
    </article>
  )
}
