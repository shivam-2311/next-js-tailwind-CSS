import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Router from 'next/router'
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});
mapbox://styles/shiv-2311/ckt7k16f041pr17o527hhqm5b    
// pk.eyJ1Ijoic2hpdi0yMzExIiwiYSI6ImNrdDdqamZnMDBzeGwycHFzNWZudWpxcmwifQ.x4_M4OmwT572zawV_rYWjg
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
