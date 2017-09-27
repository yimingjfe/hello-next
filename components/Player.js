import React, { Component } from 'react'
import Head from 'next/head'
import { stylesheet, classNames } from './player.css'
import videojs from 'video.js'

class Player extends Component {
  componentDidMount() {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'http://dx-video-test.itangchao.me/[吐槽大会]0122期：王祖蓝被老婆李亚男当场吐槽腿短_bd_mp4_preview_480P_0325_2.mp4',
        // src: 'http://dx-video-test.itangchao.me/[吐槽大会]0122期：王祖蓝被老婆李亚男当场吐槽腿短_bd_m3u8_240P_480P_0325_2.m3u8',
        type: 'video/mp4'
      }]
    }

    this.player = videojs(this.videoNode, videoJsOptions, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div>
        <Head><link href='/static/css/video.css' rel='stylesheet' /></Head>
        <Head><link href='/static/css/jc-player.css' rel='stylesheet' /></Head>
        <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
        <div className={classNames['app-video']}>
          <div data-vjs-player>
            <video ref={ node => this.videoNode = node } className={'video-js vjs-elephant'}></video>
          </div>
        </div>
      </div>
    )
  }
}

// Play.getInitialProps = async function (context) {
//   return 111
// }

export default Player
