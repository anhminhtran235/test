import DefaultSideBar from '../layout/DefaultSideBar';

function Layout({ children }) {
  return (
    <div className="layout">
        <DefaultSideBar />
        {children}
    </div>
  );
}

export default Layout;