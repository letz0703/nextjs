import NavBar from "../components/NavBar";

export default function App({Component, pageProps}) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style>{`
			body {
				box-sizing: border-box;
				padding: 1rem;
				font-size: 2rem;
			}
			`}</style>
    </>
  );
}
