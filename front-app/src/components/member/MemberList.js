import React, { useState, useEffect } from 'react';

const MemberList = () => {
    
  const mockMembers = [
    { id: 1, name: '사용자1' },
    { id: 2, name: '사용자2' },
  ];

  return (
    <div>
      <h2>회원 목록</h2>
      <ul>
        {mockMembers.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;