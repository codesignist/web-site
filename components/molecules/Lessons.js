const typeColors = {
  basic: { bg: "var(--color-type-basic)", text: "#000" },
  javascript: { bg: "var(--color-type-javascript)", text: "#000" },
  common: { bg: "var(--color-type-common)", text: "#fff" },
  react: { bg: "var(--color-type-react)", text: "#fff" },
  next: { bg: "var(--color-type-next)", text: "#fff" },
  lesson: { bg: "var(--color-type-lesson)", text: "#fff" },
};

const Lessons = ({ lessons }) => (
  <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-1.5">
    {lessons.map(({ name, type }, index) => (
      <div
        key={index}
        className="p-[1em] rounded whitespace-nowrap overflow-hidden text-ellipsis"
        style={{
          backgroundColor: typeColors[type]?.bg,
          color: typeColors[type]?.text,
        }}
      >
        {index > 0 && `${index} - `}
        {name}
      </div>
    ))}
  </div>
);

export default Lessons;
