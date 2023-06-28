import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const DarkMode = ({ onToggle, toggle }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <HeaderWrapper>
        <h1>HongTeacher</h1>
        {!toggle ? (<DarkButton onClick={onToggle} />
        ) : (
          <LightButton onClick={onToggle} />
        )}
      </HeaderWrapper>
      <DateTimer>{time.toLocaleDateString()}</DateTimer>
      <HourTimer>{time.toLocaleTimeString()}</HourTimer>
    </Container>
  );
};


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
`;


const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${(props) => props.theme.headerColor};
  h1 {
    color: ${(props) => props.theme.headerTextColor};
    font-size: 40px;
  }
`;



const DateTimer = styled.p`
  font-size: 150%;
  text-align: center;
`;

const HourTimer = styled.p`
  font-size: 200%;
  text-align: center;
`;

//html 태그 이외의 스타일을 꾸며줄때는 소괄호 사용!!!
const DarkButton = styled(MdDarkMode)`
  font-size: 32px;
  color: ${(props) => props.theme.headerTextColor};
  cursor: pointer;
`;

const LightButton = styled(MdOutlineDarkMode)`
  font-size: 32px;
  color: ${(props) => props.theme.headerTextColor};
  cursor: pointer;
`;

export default DarkMode;