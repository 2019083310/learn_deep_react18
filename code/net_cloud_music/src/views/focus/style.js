import styled from "styled-components";

export const FocusWrapper = styled.div `
  width:100%;

  background-color: #f5f5f5;

  .login-wrap{
    position: relative;
    width:980px;
    height: 700px;
    margin:0 auto;

    border:1px solid #d3d3d3;
    border-bottom:none;

    background-color: #fff;

    .login_cover{
      width:807px;
      height:388px;
      margin:50px auto;

      background: url(${require('@/assets/img/notlogin.jpeg')}) no-repeat  ;
    }

    .desc{
      position: absolute;
      z-index:9;
      top:230px;
      right:95px;

      font-size: 14px;
      color:#666;
    }

    .login_btn{
      position: absolute;
      z-index: 90;
      top:310px;
      right:201px;
      width:157px;
      height:48px;

      cursor: pointer;
      text-indent: -999px;
    }
  }
`