import React, { useEffect, useState } from 'react';
import { getBoardByNo } from './Data';
import styled from 'styled-components';

const Boardvie = styled.div`
  .post-view-wrapper {
    width: 60%;
    margin: 0 auto;
  }

  .post-view-go-list-btn {
    border: 0;
    padding: 10px;
    background-color: #ffd9d9;
  }

  .post-view-row {
    margin: 10px 0;
    display: flex;
  }

  .post-view-row > label:first-child {
    margin: 10px 0;
    width: 30%;
    font-weight: bold;
  }

  .post-view-row > *:nth-child(2) {
    margin: 10px 0;
    width: 70%;
  }
`;

const BoardView = ({ history, location, match }) => {
  const [data, setData] = useState({});

  const { no } = match.params;

  useEffect(() => {
    setData(getBoardByNo(no));
  }, []);

  return (
    <Boardvie>
      <h2 align="center">게시글 상세정보</h2>
      <div className="post-view-wrapper">
        {data ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{data.no}</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>{data.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성일</label>
              <label>{data.createDate}</label>
            </div>
            <div className="post-view-row">
              <label>조회수</label>
              <label>{data.readCount}</label>
            </div>
            <div className="post-view-row">
              <label>내용</label>
              <div>{data.content}</div>
            </div>
          </>
        ) : (
          '해당 게시글을 찾을 수 없습니다.'
        )}
        <button
          className="post-view-go-list-btn"
          onClick={() => history.goBack()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </Boardvie>
  );
};

export default BoardView;
