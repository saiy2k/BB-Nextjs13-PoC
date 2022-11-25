'use client';

import Router from 'next/router';

export default function Error() {
  return (
    <div>
      <h1> Error on page!</h1>
      <p> Try <u onClick={(e) => Router.reload()}>refreshing the page</u> </p>
    </div>
  )
}
