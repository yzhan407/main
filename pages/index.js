/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import Footer from '../src/components/footer';
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import '../sass/index.scss';
import FloatingBar from '../src/components/floatingBar';
import {withRouter} from 'next/router';

// import Fetch from 'isomorphic-unfetch';
function App() {
  // basic useState hook
  // const [test, setTest] = useState('Hello'); // getter, setter = defaultValue

  // effect (apis, asynchronous stuff, etc.)
  // useEffect(() => {
  //   setTimeout(()=> setTest('Goodbye'), 5000);
  // });

  // initial render
  return (
    <div>
      <Footer />
      <FloatingBar />
    </div>
  );
}

export default withRouter(App);
