import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 40px;
  gap: 18px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const CarMileageWrap = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  position: relative;
`;

const inputStyles = `
  display: block;
  width: 162px;
  height: 48px;
  border: none;
  background-color: #f7f7fb;
  padding-left: 0;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  &:focus {
    outline-color: rgba(138, 138, 137, 0.2);
  }
`;

export const InputFrom = styled.input`
  ${inputStyles}
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  text-indent: 70px;
`;

export const InputTo = styled.input`
  ${inputStyles}
  border-radius: 0 14px 14px 0;
  text-indent: 45px;
`;

const spanStyles = `
  position: absolute;
  display: block;
  z-index: 9;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SpanFrom = styled.span`
  ${spanStyles}
  left: 24px;
  top: 14px;
`;

export const SpanTo = styled.span`
  ${spanStyles}
  left: 180px;
  top: 14px;
`;
