import React, { useCallback, useState } from 'react';
import BoardForm from '../../components/board/BoardForm';
import { produce } from 'immer';

// 초기 게시판 폼 상태
const initialBoardFormState = {
  mode: 'null',
  bId: '',
  bName: '',
  use: 'true',
  rowsOfPage: '20',
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
  // 폼 데이터와 이미지 상태
  const [formData, setFormData] = useState(initialBoardFormState);
  const [isClicked, setIsClicked] = useState(false);

  // 이미지 클릭 핸들러
  const handleClick = () => {
    if (isClicked) {
      setFormData((prevData) => ({
        ...prevData,
        use: '_false',  // 'false'가 "미사용" 상태를 나타낸다고 가정합니다.
      }));
      setImageSrc("../../images/button/chk-off.png");
      setIsClicked(false);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        use: '_true',  // 'true'가 "사용" 상태를 나타낸다고 가정합니다.
      }));
      setImageSrc("../../images/button/chk-on.png");
      setIsClicked(true);
    }
  }

  // '문장' 상태도 포함
  const handleSentenceClick = () => {
    if (isClicked) {
      setFormData((prevData) => ({
        ...prevData,
        sentence: '_false',  // 'false'가 "미사용" 상태를 나타낸다고 가정합니다.
      }));
      setImageSrc("../../images/button/other-image-off.png");
      setIsClicked(false);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        sentence: '_true',  // 'true'가 "사용" 상태를 나타낸다고 가정합니다.
      }));
      setImageSrc("../../images/button/other-image-on.png");
      setIsClicked(true);
    }
  };

  // 입력 값 변경 핸들러
  const onChange = useCallback((e) => {
    const target = e.currentTarget;
    setFormData(
      produce((draft) => {
        draft[target.name] = target.value;
      }),
    );
  }, []);

  // 입력 값 변경 핸들러 (체크박스)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 입력 값 변경 핸들러 (숫자)
  const handleNumericChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === '' ? '' : parseInt(value, 10),
    }));
  };

  // 입력 값 변경 핸들러 (라디오)
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('폼 제출됨:', formData);
  };

  // BoardForm 컴포넌트 렌더링
  return (
    <BoardForm
      formData={formData}
      onChange={onChange}
      handleInputChange={handleInputChange}
      handleRadioChange={handleRadioChange}
      handleSubmit={handleSubmit}
      handleNumericChange={handleNumericChange}
      onClick={handleClick}
      handleCheckboxChange={handleCheckboxChange}
      handleSentenceClick={handleSentenceClick}
    />
  );
};

export default BoardFormContainer;
