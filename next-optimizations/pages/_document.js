// This file allows you to customize the entire HTML document

import Document, { Html, Head, Main, NextScript } from "next/document";

// Customizing the entire document is useful
// ---> when you want to add a language or other special format on the HTML
// ---> for adding content outside the application component tree
//      eg: when adding another div for react portals / refs which can be used for modals ect

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
            <body>
                <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
 

export default MyDocument; 