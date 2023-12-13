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
        <h4 className="news-head date">{date}</h4>
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
        title={<>New paper submitted to <i>Journal of Advances in Modeling Earth Systems</i></>} 
        date='Nov 29, 2023'
      >
        <NewsResource icon={<DocsIcon />} desc='Preprint' url=' https://arxiv.org/pdf/2310.19385' />
        <NewsResource icon={<CodeIcon />} desc='Code' url='#' />
      </NewsEntry>
      <NewsEntry 
        title={<>Started postdoc at Institut de Physique du Globe de Paris</>} 
        date='Mar 1, 2023' 
      />
      <NewsEntry 
        title={<>Obtained Ph.D. from University Grenoble-Alpes</>} 
        date='Dec 9, 2022'
      >
        <NewsResource icon={<DocsIcon />} desc='Thesis' url='https://theses.hal.science/tel-04028879v1/file/FREZAT_2022_diffusion.pdf'/>
      </NewsEntry>
      <NewsEntry 
        title={<>New paper accepted in <i>Journal of Advances in Modeling Earth Systems</i></>} 
        date='Sep 27, 2022'
      >
        <NewsResource icon={<DocsIcon />} desc='Preprint' url='https://arxiv.org/pdf/2204.03911' />
        <NewsResource icon={<CodeIcon />} desc='Code' url='#' />
      </NewsEntry>
      <NewsEntry 
        title={<>New paper accepted in <i>Physical Review Fluids</i></>} 
        date='Feb 1, 2021'
      >
        <NewsResource icon={<DocsIcon />} desc='Preprint' url='https://arxiv.org/pdf/2010.04663' />
        <NewsResource icon={<CodeIcon />} desc='Code' url='#' />
      </NewsEntry>
      <NewsEntry 
        title={<>Started Ph.D. program at University Grenoble-Alpes</>} 
        date='Oct 1, 2019'
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
