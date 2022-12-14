import styled from "styled-components";

export const RecommendBannerWrapper=styled.div`
  width:100%;
  height:285px;
  margin-top:35px;

  background: url(${props=>props?.bgImage?.imageUrl}) center center/10000px;

  .content{
    position: relative;
    width:982px;
    height:100%;
    margin:0 auto;

    .left-arrow,
    .right-arrow{
      position: absolute;
      z-index:9;
      left:-60px;
      top:50%;
      width:40px;
      height:65px;

      background: url(${require('@/assets/img/banner-control-left.png')}) no-repeat;
      
      transform:translateY(-50%);
      cursor: pointer;

      &:hover{
        background-color: rgba(0,0,0,.1);
      }
    }

    .right-arrow{
      left:100%;
      margin-left:20px;
      background: url(${require('@/assets/img/banner-control-right.png')}) no-repeat;
    }

    .item{
      img{
        width:730px;
        height:285px;
        object-fit: cover;
      }
    }

    .indicator{
      position: absolute;
      left:50%;
      bottom:10px;
      display: flex;
      align-items: center;

      transform:translateX(-50%);

      .iten{
        width:8px;
        height:8px;
        margin:10px;
        /* border:1px solid #333; */
        border-radius: 50%;

        background-color: #fff;

        cursor: pointer;
      }

      .iten.active{
        background-color: #f00;
      }
    }
  }

  .download-rec{
    position: absolute;
    z-index:100px;
    top:0;
    right:0;
    bottom:0;
    left:730px;
    width:250px;

    background: url(${require('@/assets/img/download.png')}) no-repeat center 0;

    .cover-text{
      width:100%;
      height:56px;
      margin-top:180px;

      cursor: pointer;
      text-indent: -9999px;
    }
  }
`