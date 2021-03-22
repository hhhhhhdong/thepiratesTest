function Layout(props) {
  return (
    <>
      <div>navbar</div>
      <div>{props.children}</div>
    </>
  );
}
export default Layout;
