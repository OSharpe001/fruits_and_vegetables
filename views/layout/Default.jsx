import React from 'react';

function Default({ title, children}) {
  return (
    <div>
      <h1>Default Page</h1>
      <html>
        <head><title>{title}</title></head>
        <body>
        <h1>{title}</h1>
        {children}
        </body>
      </html>
    </div>
  );
};

module.exports = Default;