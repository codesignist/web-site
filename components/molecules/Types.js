import styled from "styled-components";

const TypesDiv = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;

const Type = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  :before {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--${({ type }) => type});
  }
`;

const Types = ({ types }) => (
  <TypesDiv>
    {types.map(({ name, type }, index) => (
      <Type key={index} type={type}>
        {name}
      </Type>
    ))}
  </TypesDiv>
);

export default Types;
