import React, { useCallback, useState } from 'react';
import BoardForm from '../../components/board/BoardForm';
import { produce } from 'immer';

const initialBoardFormState = {
  mode: 'null',
  bId: '',
  bName: '',
  use: 'true',
  rowsOfPage: '',
  showViewList: 'true',
  category: 'defaultCategory',
  listAccessRole: 'ALL',
  viewAccessRole: 'ALL',
  writeAccessRole: 'ALL',
  replyAccessRole: 'ALL',
  commentAccessRole: 'ALL',
  useEditor: 'true',
  useAttachFile: 'true',
  useAttachImage: 'true',
  locationAfterWriting: 'view',
  useReply: 'true',
  useComment: 'true',
  skin: 'default',
};

const BoardFormContainer = () => {
  const [formData, setFormData] = useState(initialBoardFormState);
  const [imageSrc, setImageSrc] = useState("../../images/button/chk-off.png"); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 state로 관리

  const handleClick = () => {
    if (isClicked) {
      setImageSrc("../../images/button/chk-off.png");
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc("../../images/button/chk-on.png");
      setIsClicked(true); // true일 땐 변경될 이미지 src
    }
  };
  const onChange = useCallback((e) => {
    const target = e.currentTarget;
    setFormData(
      produce((draft) => {
        draft[target.name] = target.value;
      }),
    );
  }, []);


  // 텍스트, 숫자, 체크박스, 라디오 입력의 변경을 처리하는 함수
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 숫자 입력이 변경될 때 호출되는 함수
  const handleNumericChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === '' ? '' : parseInt(value, 10), // 빈 문자열이면 그대로 유지, 아니면 정수로 변환
    }));
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ? 'true' : 'false',
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('폼 제출됨:', formData);
  }



  return (
    <BoardForm
      formData={formData}
      onChange={onChange}
      handleInputChange={handleInputChange}
      handleRadioChange={handleRadioChange}
      handleSubmit={handleSubmit}
      handleNumericChange={handleNumericChange}
      onClick={handleClick}
      Imagesrc={imageSrc}
    />
  );
};

export default BoardFormContainer;
