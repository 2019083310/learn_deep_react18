import styled from "styled-components";

export const EntireFilterWrapper = styled.div `
  display: flex;
  align-items: center;
  height: 48px;
  padding-left:16px;
  border-bottom:1px solid #f2f2f2;
  background-color:#fff;

  .filter{
    display: flex;
    align-items: center;

    .item{
      padding:6px 12px;
      margin:0 4px 0 8px;
      border:1px solid #dce0e0;
      border-radius:4px;
      cursor: pointer;

      &.active{
        background-color:#008489;
        border:1px solid #008489;
        color:#fff;
      }
    }
  }
`