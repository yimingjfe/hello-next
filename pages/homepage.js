/* eslint-disable */
import React, { Component } from 'react'
import Document from 'next/document'
import { stylesheet, classNames } from '../components/homepage/style.css'
import * as globalStyles from '../styles/style.css'
import Head from 'next/head'

const styles={
  bannerCursors: {
    position: 'absolute',
    width: '240px',
    height: '120px',
    borderRadius: '2px',
    top: '115px',
    right: '250px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100
  },
  cursor: {
    display: 'block',
    width: '100%',
    color: '#F8F8F4',
    // height: '41px',
    // lineHeight: '41px',
    flex: '1 1 0',
    fontSize: '14px',
  },
  cursorContent: {
    display: 'inline-block',
    paddingLeft: '15px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '210px'
  }
}

export default class homepage extends Component {
  componentDidMount() {
    const Swiper = require('swiper');
    const swiper = new Swiper(this.swiperNode, {
      speed: 400,
      autoplay: 800,
      effect: 'fade',
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
    });
    const cursors = new Swiper(this.swiperControl, {
      direction: 'vertical',
      // spaceBetween: 10,
      // centeredSlides: true,
      // slidesPerView: 'auto',
      // touchRatio: 0.2,
      slideToClickedSlide: true
    })
  }

  render() {
    return (
      <div>
        <div className={classNames.header}>
          <Head><style dangerouslySetInnerHTML={{ __html: globalStyles.stylesheet }}/></Head>
          <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }}/></Head>
          <Head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css"></link></Head>
          <div className={classNames.tops}></div>
          <div className={classNames.tabs}></div>
          <div className='swiper-container cursors' ref={ elem => this.swiperControl = elem } style={styles.bannerCursors}>
            <div className='swiper-wrapper'>
              <div className='swiper-slide' style={styles.cursor}>
                <span style={styles.cursorContent}>欧冠: 奇迹! 巴萨6-5惊天逆转巴黎</span>
              </div>
              <div className='swiper-slide' style={styles.cursor}>
                <span style={styles.cursorContent}>奇异博士: 卷福化身漫威最强战力</span>
              </div>
              <div className='swiper-slide' style={styles.cursor}>
                <span style={styles.cursorContent}>我们的挑战: 小岳岳挑战活虫宴</span>
              </div>
            </div>
          </div>
          <div className='swiper-container banner' ref={ elem => this.swiperNode = elem }>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <img src='//pic0.qiyipic.com/common/lego/20170924/debf4fe12a9246bcad1c893906c8f606.webp?src=focustat_0_20130527_4' alt=''/>
              </div>
              <div className='swiper-slide'>
                <img src='//pic1.qiyipic.com/common/lego/20170927/e0459e1e679f4f71aed30867badb0582.webp?src=focustat_0_20130527_4' alt=''/>
              </div>
              <div className='swiper-slide'>
                <img src='//pic2.qiyipic.com/common/lego/20170927/41dd3c4233194aae850a5d2368640ad8.webp?src=focustat_0_20130527_9' alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
