const Types = ({ types }) => (
  <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
    {types.map(({ name, type }, index) => (
      <div key={index} className="rounded flex items-center gap-2.5">
        <span
          className="block w-6 h-6 rounded-full shrink-0"
          style={{ backgroundColor: `var(--color-type-${type})` }}
        />
        {name}
      </div>
    ))}
  </div>
);

export default Types;
