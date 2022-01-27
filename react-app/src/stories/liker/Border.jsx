export const Border = (Content) => {
  return (
    <div style={{ margin: "8px", padding: "8px", border: "1px solid red" }}>
      aaa
      <Content />
      aaa
    </div>
  );
};
