import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  position: relative;
  .logoWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
    > p {
      margin: 0;
      font-size: 12px;
      > span {
        font-weight: bold;
        margin-right: 5px;
      }
    }
  }
  .buttonsWrapper {
    display: flex;
    flex-direction: row;
    > button {
      margin-left: 5px;
      color: #666;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      &.active {
        background: #ccc;
      }
      > i {
        cursor: default;
        font-size: 16px;
        color: #666;
      }
    }
  }
`;
