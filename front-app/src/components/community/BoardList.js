import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from './table/CommonTable';
import CommonTableColumn from './table/CommonTableColumn';
import CommonTableRow from './table/CommonTableRow';
import { boardList } from './Data';
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

const BoardList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(boardList);
  }, []);

  return (
    <Boardvie>
      <h1>커뮤니티</h1>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/postView/${item.no}`}>{item.title}</Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  <CommonTableColumn>{item.readCount}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ''}
      </CommonTable>
    </Boardvie>
  );
};

export default BoardList;
