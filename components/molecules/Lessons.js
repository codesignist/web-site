import styled, { css } from "styled-components";

const Lesson = styled.div`
  padding: 1em;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--${({ type }) => type});
  ${({ type }) =>
    ({
      basic: css`
        color: #000;
      `,
      javascript: css`
        color: #000;
      `,
      common: css`
        color: #fff;
      `,
      react: css`
        color: #fff;
      `,
      next: css`
        color: #fff;
      `,
      lesson: css`
        color: #fff;
      `,
    }[type])};
`;

const LessonsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 6px;
`;

const Lessons = ({ lessons }) => (
  <LessonsDiv>
    {lessons.map(({ name, type }, index) => (
      <Lesson key={index} type={type}>
        {index > 0 && `${index} - `}
        {name}
      </Lesson>
    ))}
  </LessonsDiv>
);

export default Lessons;
