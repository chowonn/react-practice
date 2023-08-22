function Nav() {}

export default Nav;

const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="f" element={<Products />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
