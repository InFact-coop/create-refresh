import Head from "next/head"
import metadata from "../static/images/metadata.png"

function SEO({ title, description, image }) {
  const defaultDescription = "Try the EU Compliant Meme Generator for yourself"
  const defaultTitle = "Make ANY Meme EU Complaint!"
  const defaultImage = metadata

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content={description || defaultDescription} />
      <meta name="title" content={title || defaultTitle} />
      <meta
        name="og:title"
        property="og:title"
        content={title || defaultTitle}
      />
      <meta name="og:type" content="website" />
      <meta
        name="og:description"
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        name="og:image"
        property="og:image"
        content={image || defaultImage}
      />
      <meta name="og:image:secure_url" content={image || defaultImage} />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:height" content="630" />
      <meta name="og:image:width" content="1200" />
      <meta name="og:locale" content="en" />
      <meta name="fb:app_id" content="en" />
      <meta
        name="og:url"
        property="og:url"
        content="https://eu-compliant-meme-generator.herokuapp.com/"
      />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="fb:app_id" content="1627837104015374" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.twttr = (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0],t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function(f) {t._e.push(f);
            }; 
          return t;
        }(document, "script", "twitter-wjs"));`,
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.fbAsyncInit = function() {
          FB.init({
            appId            : 1627837104015374,
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v3.2'
          });
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = 'https://connect.facebook.net/en_US/sdk.js';
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));`,
        }}
      />
    </Head>
  )
}

export default SEO
